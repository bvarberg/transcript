const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    transcript: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = config;
