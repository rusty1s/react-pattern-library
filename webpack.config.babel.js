export default {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    './demo/index.jsx',
  ],
  output: {
    publicPath: '/public',
    filename: 'scripts.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash64:5]',
          // 'postcss',
        ],
      },
    ],
  },
};
