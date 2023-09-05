import path from "path";
import { run } from "@mermaid-js/mermaid-cli";
import temp from "temp";
import fs from "fs/promises";
import jsdom from "jsdom";

temp.track();

let cache = {};
let cleanupInterval = 2; // minutes
let cleanupTreshold = 30; // minimum cache size
// FIXME: The intervall should only be running in dev mode!
// setInterval(() => {
//   if (Object.keys(cache).length < cleanupTreshold) return;
//   console.log("clear mermaid cache!");
//   cache = {};
// }, cleanupInterval * 60000);

export default async function marpMermaid(md) {
  const { fence } = md.renderer.rules; // super fence block rule
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const info = md.utils.unescapeAll(tokens[idx].info).trim();
    const graphDefinition = tokens[idx].content;
    const cssClassName = `mermaid-${idx}`;
    const [_, lang, userOptions] = info?.match(/(\w+)\s*(?:\s*(.+)\s*)?/) || {};
    if (lang !== "mermaid")
      return fence.call(self, tokens, idx, options, env, self);

    let opts = { width: "100%", type: "png", align: "center" };
    userOptions
      ?.replaceAll(" = ", "=")
      .split(" ")
      .forEach((pair) => {
        const [key, value] = pair.split("=");
        opts[key] = value;
      });
    return `
      <style>
        .${cssClassName} {
          text-align: ${opts.align};
        }
        .${cssClassName} img,
        .${cssClassName} svg {
          width: ${opts.width};
        }
      </style>
      <div class="__mermaid ${cssClassName}" 
           data-type="${opts.type}" 
           data-idx=${idx}>
        ${graphDefinition}
      </div>
    `;
  };
}
export async function postProcessor(_markdown, _env, html, css, comments) {
  const doc = new jsdom.JSDOM(html); // parse html to DOM
  const mermaidDivs = doc.window.document.querySelectorAll("div.__mermaid");
  for (const element of mermaidDivs) await processMermaidDivCli(element);
  const processedHtml = doc.window.document.documentElement.outerHTML;
  return { html: processedHtml, css, comments };
}

async function processMermaidDivCli(div) {
  const graphDefinition = div.textContent;
  const cacheKey = btoa(graphDefinition) + div.dataset.type;

  // Return cached Image
  if (cache[cacheKey]) {
    if (div.dataset.type === "png")
      div.innerHTML = `<img src="data:image/png;base64,${cache[cacheKey]}" alt="" />`;
    else div.innerHTML = cache[cacheKey];
    return;
  }

  const dirPath = await temp.mkdir("mermaid");
  let inputFile = path.join(dirPath, "input.mmd");
  let outputFile = path.join(dirPath, "output");
  await fs.writeFile(inputFile, graphDefinition);
  await run(inputFile, outputFile, {
    outputFormat: div.dataset.type || "png",
    puppeteerConfig: {
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
        "--force-color-profile=srgb",
        "--font-render-hinting=none",
      ],
      ignoreHTTPSErrors: true,
    },
    parseMMDOptions: {
      viewport: { height: 600, width: 800, deviceScaleFactor: 2 },
    },
  });
  if (div.dataset.type === "png") {
    cache[cacheKey] = await fs.readFile(outputFile, {
      encoding: "base64",
    });
    div.innerHTML = `<img src="data:image/png;base64,${cache[cacheKey]}" alt="" />`;
  } else {
    cache[cacheKey] = await fs.readFile(outputFile);
    div.innerHTML = cache[cacheKey];
  }
}
