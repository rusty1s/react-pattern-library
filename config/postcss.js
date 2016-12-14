let postcss = require('react-dev-config')('postcss');

module.exports = postcss.concat([
  require('postcss-mixins')(),
  require('postcss-font-magician')(),
]);
