import webpack from 'webpack';

export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    './src/index',
  ],
  output: {
    path: __dirname + '/public/assets',
    filename: 'scripts.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
