import React, { PropTypes, Children } from 'react';

import styles from './grid.css';

var Grid = function Grid(_ref) {
  var children = _ref.children;

  var items = Children.map(children, function (child, index) {
    return React.createElement(
      'div',
      { key: index, className: styles.item },
      child
    );
  });

  return React.createElement(
    'div',
    { className: styles.main },
    items
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired
};

export default Grid;