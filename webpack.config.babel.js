const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbon = require('bourbon').includePaths;

export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    './src/index.js',
  ],
  output: {
    path: '../resources/META-INF/resources/dist/bundle',
    filename: 'scripts.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract('css!sass?includePaths[]=' + bourbon),
    },
    {
      test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file',
    }],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
