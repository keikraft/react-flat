const open = require('open');
const config = require('./build.config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  contentBase: 'playground/build',
  historyApiFallback: true,
  hot: true,
  inline: true,
  stats: config.dev.stats,
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Listening on port 8080');
  open('http://localhost:8080');
});