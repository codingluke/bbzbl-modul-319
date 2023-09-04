import path from "path";
import { run } from "@mermaid-js/mermaid-cli";
import temp from "temp";
import fs from "fs/promises";
import jsdom from "jsdom";

temp.track();

let cache = {};

export default async function marpMermaid(md) {
  /* Render mermaid fenced code block to a placeholder for post-processing */

  // super fence block rule
  const { fence } = md.renderer.rules;
  // final fence block rule
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const info = md.utils.unescapeAll(tokens[idx].info).trim();
    if (info) {
      const [_, lang, divOptions] = info.match(/(\w+)\s*(?:\s*(.+)\s*)?/);
      let options = { width: "100%", type: "png", align: "center" };
      if (divOptions) {
        const splitted = divOptions.replaceAll(" = ", "=").split(" ");
        splitted.forEach((val) => {
          const [key, value] = val.split("=");
          if (key === "width" || key === "w") options.width = value;
          if (key === "type" || key === "t") options.type = value;
          if (key === "align" || key === "a") options.align = value;
        });
      }
      if (lang == "mermaid") {
        const graphDefinition = tokens[idx].content;
        const cssClassName = `mermaid-${idx}`;
        const cssClass = `
          .${cssClassName} {
            text-align: ${options.align};
          }
          .${cssClassName} img,
          .${cssClassName} svg {
            width: ${options.width};
          }`;
        return `<style>${cssClass}</style><div class="__mermaid ${cssClassName}" data-type="${options.type}" data-idx=${idx}>${graphDefinition}</div>`;
      }
    }

    return fence.call(self, tokens, idx, options, env, self);
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
  for (let i = 0; i < mermaidDivs.length; i++) {
    await processMermaidDivCli(mermaidDivs[i]);
  }
}

async function processMermaidDivCli(div) {
  const graphDefinition = div.textContent;
  const base64GraphDefinition = btoa(graphDefinition)+div.dataset.type;

  // Return cached Image
  if (cache[base64GraphDefinition]) {
    if (div.dataset.type === "png")
      return (div.innerHTML = `<img src="data:image/png;base64,${cache[base64GraphDefinition]}" alt="" />`);
    return (div.innerHTML = cache[base64GraphDefinition]);
  }

  const dirPath = await temp.mkdir("mermaid");
  var inputFile = path.join(dirPath, "input.mmd");
  var outputFile = path.join(dirPath, "output");
  await fs.writeFile(inputFile, graphDefinition);
  await run(inputFile, outputFile, {
    outputFormat: div.dataset.type || "png",
    parseMMDOptions: {
      viewport: { height: 600, width: 800, deviceScaleFactor: 2 },
    },
  });
  if (div.dataset.type === "png") {
    cache[base64GraphDefinition] = await fs.readFile(outputFile, { encoding: "base64" });
    div.innerHTML = `<img src="data:image/png;base64,${cache[base64GraphDefinition]}" alt="" />`;
  } else {
    cache[base64GraphDefinition] = await fs.readFile(outputFile);
    div.innerHTML = cache[base64GraphDefinition];
  }
}
