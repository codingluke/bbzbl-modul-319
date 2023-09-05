import path from "path";
import { run } from "@mermaid-js/mermaid-cli";
import temp from "temp";
import fs from "fs/promises";
import jsdom from "jsdom";

temp.track();

let cache = {}; // TODO: prevent memory leak (cleanup?)

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
  await syncProcessMermaidDivs(mermaidDivs);
  const processedHtml = doc.window.document.documentElement.outerHTML;
  return { html: processedHtml, css, comments };
}

async function syncProcessMermaidDivs(mermaidDivs) {
  for (const element of mermaidDivs) {
    await processMermaidDivCli(element);
  }
}

async function processMermaidDivCli(div) {
  const graphDefinition = div.textContent;
  const base64GraphDefinition = btoa(graphDefinition) + div.dataset.type;

  // Return cached Image
  if (cache[base64GraphDefinition]) {
    if (div.dataset.type === "png")
      div.innerHTML = `<img src="data:image/png;base64,${cache[base64GraphDefinition]}" alt="" />`;
    else div.innerHTML = cache[base64GraphDefinition];
    return;
  }

  const dirPath = await temp.mkdir("mermaid");
  let inputFile = path.join(dirPath, "input.mmd");
  let outputFile = path.join(dirPath, "output");
  await fs.writeFile(inputFile, graphDefinition);
  await run(inputFile, outputFile, {
    outputFormat: div.dataset.type || "png",
    parseMMDOptions: {
      viewport: { height: 600, width: 800, deviceScaleFactor: 2 },
    },
  });
  if (div.dataset.type === "png") {
    cache[base64GraphDefinition] = await fs.readFile(outputFile, {
      encoding: "base64",
    });
    div.innerHTML = `<img src="data:image/png;base64,${cache[base64GraphDefinition]}" alt="" />`;
  } else {
    cache[base64GraphDefinition] = await fs.readFile(outputFile);
    div.innerHTML = cache[base64GraphDefinition];
  }
}
