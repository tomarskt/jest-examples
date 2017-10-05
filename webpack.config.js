var path = require('path');
var webpack = require('webpack');


var config = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  }
};


module.exports = config