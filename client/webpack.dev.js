const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});
