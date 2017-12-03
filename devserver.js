const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.js');
var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

/*
const validate = require('webpack2-validator')
 
module.exports = validate(config);*/


var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(ROOT_PATH, 'public'), //Where static content should be serverd
  publicPath: '/', //Virtual link for the bundle
  hot: true,
  historyApiFallback: true, //Fixes refresh problem
  overlay: true
});
server.listen(3000);

