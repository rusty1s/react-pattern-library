const cssimport = require('postcss-import');
const mixins = require('postcss-mixins');
const next = require('postcss-cssnext');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

module.exports = [
  cssimport(),
  mixins(),
  next(),
  normalize(),
  fontMagician(),
];
