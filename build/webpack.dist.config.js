const path = require('path');
const webpack = require('webpack');
const config = require('./build.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getCssScssLoaders(sourceMap) {
  return ['css', 'sass'].map((ext) => {
    return {loader: `${ext}-loader`, options: {sourceMap}};
  });
}

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

const webpackDistConfig = {
  entry: {
    app: resolve('src/index.jsx')
  },
  devtool: config.prod.cssSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[id].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve('components'),
      resolve('node_modules')
    ],
    alias: {
      components: resolve('components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: resolve('src'),
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(css|scss)$/,
        use: config.prod.extractStyles
          ? ExtractTextPlugin.extract({fallback: 'style-loader', use: getCssScssLoaders(config.prod.cssSourceMap)})
          : [{loader: 'style-loader'}].concat(getCssScssLoaders(config.prod.cssSourceMap))
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': config.prod.env}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, sourceMap: true}),
    new HtmlWebpackPlugin({
      filename: config.build.indexHtml,
      template: config.build.templateHtml,
      inject: true,
      minify: {removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true},
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          module.resource && /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
};

if (config.prod.extractStyles) {
  webpackDistConfig.plugins.push(new ExtractTextPlugin({filename: 'styles/[name].[contenthash].css'}));
}

if (config.prod.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackDistConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.prod.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

module.exports = webpackDistConfig;