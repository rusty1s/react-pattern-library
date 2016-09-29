export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    './src/index',
  ],
  output: {
    publicPath: '/assets',
    filename: 'scripts.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['react-hot', 'babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
