let path = require('path');
let express = require('express');
let webpack = require('webpack');
let webpackConfig = require('../webpack.config');

const SERVER_PORT = 56744;

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    chunks: false,
    children: false,
    hash: false,
    version: false
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server listening on http://localhost:' + SERVER_PORT);
  }
});
