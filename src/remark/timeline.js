const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    let number = 1;
    visit(ast, 'listItem', (node) => {
      // if (node.depth === 2 && node.children.length > 0) {
      //   node.children.unshift({
      //     type: 'text',
      //     value: `Section ${number}. `,
      //   });
      //   number++;
      // }
    });
  };
  return transformer;
};

module.exports = plugin;
