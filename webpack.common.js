const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    transcript: './src/index.jsx',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      title: 'Transcript',
      template: 'src/index.html',
    }),
  ],
};

module.exports = config;
