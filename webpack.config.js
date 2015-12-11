'use strict';

var path = require('path');
var webpack = require('webpack');
var easyfile = require('easyfile');
var compiledTemplate = require('./src/compiledTemplate');
var assets = require('./src/assets');

var html = compiledTemplate({
  title: '',
  assets: assets,
  appHtml: '',
  appData: 'null'
});

easyfile.write('./dist/index.html', html, {force: true})

module.exports = {
  watch: process.env.NODE_ENV === 'local',
  entry: {
    main: "./src/main.js",
    vendor: ["react"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"react.js"),
  ],
}
