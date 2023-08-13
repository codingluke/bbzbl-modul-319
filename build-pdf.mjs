import { generatePDF } from "docs-to-pdf/lib/utils.js";
import modulConfig from "./modul.config.js";

generatePDF({
  initialDocURLs: [`http://localhost:3000/${modulConfig.repoName}/docs`],
  puppeteerArgs: [
    "--no-sandbox",
    "--disable-web-security",
    "--disable-features=IsolateOrigins,site-per-process",
    "--force-color-profile=srgb",
    "--font-render-hinting=none",
    "--export-tagged-pdf",
  ],
  disableTOC: true,
  outputPDFFilename: `build/assets/pdf/${modulConfig.repoName}.pdf`,
  filterKeyword: modulConfig.pdfFilterKeyword,
  coverTitle: modulConfig.title,
  baseUrl: modulConfig.url,
  coverImage: "https://codingluke.github.io/bbzbl-modul-404/img/bbzbl-logo.png",
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
    <div style="height: 19px; width: 100%; display: flex; align-items: center; justify-content: space-between; font-size: 6px; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.5px;"> 
      <span class="date"></span> 
      <span class="title"></span> 
      <span class="pageNumber"></span> 
    </div>`,
});
