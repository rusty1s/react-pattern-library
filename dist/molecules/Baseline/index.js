import React, { PropTypes } from 'react';

import styles from './baseline.css';

var Baseline = function Baseline(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: styles.main },
    children
  );
};

Baseline.propTypes = {
  children: PropTypes.node.isRequired
};

export default Baseline;