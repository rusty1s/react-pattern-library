const cssimport = require('postcss-import');
const next = require('postcss-cssnext');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

module.exports = [
  cssimport(),
  next(),
  normalize(),
  fontMagician(),
];
