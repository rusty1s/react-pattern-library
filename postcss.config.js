const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const cssnormalize = require('postcss-normalize');
const cssfonts = require('postcss-font-magician');

module.exports = {
  plugins() {
    return [
      cssimport(),
      cssnext(),
      cssnormalize(),
      cssfonts(),
    ];
  },
};
