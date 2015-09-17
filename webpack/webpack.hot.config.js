// Run like this:
// cd client && node server.js

const path = require('path');
const config = require('./webpack.common.config');
const webpack = require('webpack');

const url = "http://0.0.0.0";

config.entry.push('webpack-dev-server/client?' + url + ':3000');
config.output = {

  // this file is served directly by webpack
  filename: 'client-bundle.self.js',
  path: __dirname,
  publicPath: url + ':3000/assets/components'
};
config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];
config.devtool = 'eval-source-map';

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  },
  {
    test: /\.scss$/,
    loader: "style!css?sourceMap!autoprefixer-loader!sass"
  }, // loaders: ['style', 'css', 'sass', 'autoprefixer']},
  { test: /\.coffee$/, loader: 'coffee' }
)

module.exports = config;
