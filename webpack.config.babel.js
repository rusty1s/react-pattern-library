export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    './src/index.jsx',
  ],
  output: {
    publicPath: '/public',
    filename: 'scripts.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react', 'babel'],
      exclude: /node_modules/,
    },
  },
};
