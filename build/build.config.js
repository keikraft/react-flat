const path = require('path');

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'public',
    assetsPublicPath: '/',
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