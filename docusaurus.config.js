// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const oembed = require("@agentofuser/remark-oembed");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Modul 403/319",
  tagline: "Applikationen entwerfen und implementieren",
  url: "https://codingluke.github.io",
  baseUrl: "/bbzbl-modul-319/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  markdown: {
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "codingluke", // Usually your GitHub org/user name.
  projectName: "bbzbl-modul-319", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["de"],
        indexBlog: false,
        indexPages: true,
      },
    ],
    require.resolve("@docusaurus/theme-mermaid"),
  ],

  plugins: [
    "remark-docusaurus-tabs",
    [
      "devserver-config",
      {
        proxy: {
          "/bbzbl-modul-319/slides": {
            target: "http://localhost:3003",
            pathRewrite: function (
              /** @type {string} */ path,
              /** @type {any} */ _req
            ) {
              return path.replace("/bbzbl-modul-319/slides", "") + ".md";
            },
          },
        },
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/codingluke/bbzbl-modul-431/tree/main/',
          remarkPlugins: [oembed],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
      navbar: {
        title: "Modul 403/319",
        logo: {
          alt: "BBZBL Logo",
          src: "img/bbzbl-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Unterlagen",
          },
          { to: "/slides/", label: "Präsentationen", position: "left" },
          {
            href: "https://github.com/codingluke/bbzbl-modul-319",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Made with ❤️ in Pratteln`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-red-line",
            line: "highlight-red-next-line",
            block: { start: "highlight-red-start", end: "highlight-red-end" },
          },
          {
            className: "code-block-green-line",
            line: "highlight-green-next-line",
            block: {
              start: "highlight-green-start",
              end: "highlight-green-end",
            },
          },
          {
            className: "code-block--line",
            line: "highlight--next-line",
            block: { start: "highlight--start", end: "highlight--end" },
          },
          {
            className: "code-block-orange-line",
            line: "highlight-orange-next-line",
            block: {
              start: "highlight-orange-start",
              end: "highlight-orange-end",
            },
          },
          {
            className: "code-block-blue-line",
            line: "highlight-blue-next-line",
            block: { start: "highlight-blue-start", end: "highlight-blue-end" },
          },
        ],
      },
    }),
};
module.exports = config;
