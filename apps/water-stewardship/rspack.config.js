const { composePlugins, withNx, withWeb } = require('@nx/rspack');

module.exports = composePlugins(withNx(), withWeb(), (config) => {
  return {
    ...config,
    devServer: { ...config.devServer, port: 3000, historyApiFallback: true },
  };
});
