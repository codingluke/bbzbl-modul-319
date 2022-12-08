module.exports = function(_context, devServerOptions) {
  return {
    name: 'devserver-config',
    configureWebpack(_config, _isServer) {
      return {
        devServer: Object.keys(devServerOptions).filter(key =>
          key !== 'id').reduce((obj, key) => {
            obj[key] = devServerOptions[key];
            return obj;
          }, {})
      };
    },
  };
};
