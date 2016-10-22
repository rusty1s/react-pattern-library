const autoprefixer = require('autoprefixer');

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
              sourceMaps: true,
              modules: true,
              importLoaders: 1,
              localIndentName: '[name]__[local]_[hash:base64:2]',
            },
          },
          {
            loader: 'postcss',
            options: {
              plugins() {
                return [
                  autoprefixer,
                ];
              },
            },
          },
        ],
      },
    ],
  },
};
