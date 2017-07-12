import React, { PropTypes } from 'react';

import styles from './box.css';

var Box = function Box(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: styles.main },
    children
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired
};

export default Box;