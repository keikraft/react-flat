const path = require('path');

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    cssSourceMap: true,
    extractStyles: true,
    autoOpenBrowser: true,
    stats: {
      assets: false,
      cached: false,
      chunkModules: false,
      children: false,
      modules: false,
      source: false,
      colors: true
    }
  },
  dist: {
    env: {
      NODE_ENV: '"production"'
    },
    cssSourceMap: true,
    extractStyles: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
};