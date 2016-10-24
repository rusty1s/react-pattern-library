const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const cssnormalize = require('postcss-normalize');

module.exports = {
  entry: [
    './demo/src/index.jsx',
  ],
  output: {
    publicPath: '/public',
    filename: 'scripts.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style',
          {
            loader: 'css',
            options: {
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64:2]',
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss',
            options: {
              plugins() {
                return [
                  cssimport(),
                  cssnext(),
                  cssnormalize(),
                ];
              },
            },
          },
        ],
      },
    ],
  },
};
