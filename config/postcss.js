const postcss = require('react-dev-config')('postcss');

module.exports = postcss.concat([
  require('postcss-font-magician')(),
]);
