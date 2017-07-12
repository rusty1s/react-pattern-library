import React, { PropTypes } from 'react';

import styles from './paragraph.css';

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children;
  return React.createElement(
    'p',
    { className: styles.main },
    children
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;