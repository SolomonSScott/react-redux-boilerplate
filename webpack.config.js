var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loaders: ['babel-loader'],
        include: __dirname,
      }
    ]
  }
};