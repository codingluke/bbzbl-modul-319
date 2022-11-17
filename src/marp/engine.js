const markdownItMark = require('markdown-it-mark');
const markdownItContainer = require('markdown-it-container');
const link = require("markdown-it-external-links");

module.exports = ({ marp }) => marp
  .use(markdownItMark)
  .use(markdownItContainer, 'info')
  .use(markdownItContainer, 'footnotes', {
    render: function (tokens, idx) {
      let className = tokens[idx].info.trim().match(/^\s?footnotes(\s+(.*))?$/);
      if (tokens[idx].nesting === 1)
        return `<div class="footnotes ${className[1]}">`; // left/right as second classes
      return '</div>\n';
    }
  })
  .use(markdownItContainer, 'columns', {
    render: function (tokens, idx) {
      let className = tokens[idx].info.trim().match(/^\s?columns(\s+(.*))?$/);
      if (tokens[idx].nesting === 1) 
        return `<div class="columns ${className[1]}"><div>\n`;
      return '</div></div>\n';
    }
  })
  .use(markdownItContainer, 'split', {
    render: function (tokens, idx) {
      let className = tokens[idx].info.trim().match(/^\s?split(\s+(.*))?$/);
      if (tokens[idx].nesting === 1)
        return `</div><div class="${className[1]}">\n`;
      return '</div></div>\n';
    }
  })
  .use(link, {
    externalTarget: "_blank",
    externalRel: "noopener noreferrer"
  })
