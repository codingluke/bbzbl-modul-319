import { generatePDF } from "docs-to-pdf/lib/utils.js";
import modulConfig from "./modul.config.js";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const now = new Date(Date.now()) 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.appRoot = path.resolve(__dirname);

const getBase64ImgTag = (path) => {
  const imgPath = appRoot + path;
  const base64Logo = fs.readFileSync(imgPath, { encoding: "base64" });
  return `<img height="30px" src="data:image/png;base64, ${base64Logo}"/>`;
};


generatePDF({
  initialDocURLs: [
    `http://localhost:3000/${modulConfig.repoName}/docs`,
  ],
  puppeteerArgs: [
    "--no-sandbox",
    "--disable-web-security",
    "--disable-features=IsolateOrigins,site-per-process",
    "--force-color-profile=srgb",
    "--font-render-hinting=none",
    "--export-tagged-pdf",
  ],
  pdfMargin: { top: 110, right: 72, bottom: 60, left: 72 },
  disableTOC: true,
  outputPDFFilename: `build/assets/pdf/${modulConfig.repoName}.pdf`,
  filterKeyword: modulConfig.pdfFilterKeyword,
  coverTitle: modulConfig.title,
  coverSub: modulConfig.tagline,
  paperFormat: "A4",
  baseUrl: modulConfig.url,
  // coverImage: "https://codingluke.github.io/bbzbl-modul-404/img/bbzbl-logo.png",
  contentSelector: "article",
  excludeSelectors: [
    "article .anchor:has(+ .pdf-exclude)",
    ".pdf-exclude",
    ".margin-vert--xl a",
    "[class^='tocCollapsible']",
    ".breadcrumbs",
    ".theme-edit-this-page",
    "iframe",
  ],
  paginationSelector: "a.pagination-nav__link.pagination-nav__link--next",
  headerTemplate: `
    <style>
      .header {
        height: 45px; 
        width: 100%; 
        display: flex; 
        justify-content: space-between; 
        line-height: 1.5;
        align-items: flex-end;
        font-size: 8px; 
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont;
        margin: 10px 55px;
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }
    </style>
    <div class="header">
      <div>Berufsbildungszentrum Baselland, IT-Ausbildung Pratteln<br />${
        modulConfig.title
      } - ${modulConfig.tagline}</div>
      ${getBase64ImgTag("/static/img/bbzbl-logo.png")}
    </div>`,
  footerTemplate: `
    <style>
      .footer {
        height: 15px; 
        width: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: flex-end;
        font-size: 8px; 
        margin: 10px 55px;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont;
        border-top: 1px solid rgba(0,0,0,0.05);
      }
    </style>
    <div class="footer">
      <div>${now.toLocaleDateString('de-DE', {})}</div>
      <div>${modulConfig.url}/${modulConfig.repoName}</div>
      <div><span class="pageNumber"></span> / <span class="totalPages"></span></div>
    </div> `,
});
