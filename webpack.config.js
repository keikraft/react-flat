let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = process.cwd();
function resolvePath(relPath) {
  return path.join(basePath, relPath);
}

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './playground/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'x-flat.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      {test: /(\.css|\.scss)$/, loader: 'style!css!sass'}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.scss', '.js', '.jsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*']
  },
  watchOptions: {
    aggregateTimeout: 100 // do not re-build for 100ms after the last build, default is 300ms
  },
  postcss: [autoprefixer]
};