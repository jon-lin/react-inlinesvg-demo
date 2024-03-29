// ./webpack.config.js
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      },
      // {
      //   test: /\.jsx?/,
      //   include: APP_DIR,
      //   loader: 'babel-loader'
      // }
    ]
  }
};

module.exports = config;
