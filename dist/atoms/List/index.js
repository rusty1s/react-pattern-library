import React, { PropTypes, Children } from 'react';

import styles from './list.css';

var List = function List(_ref) {
  var children = _ref.children,
      enumerate = _ref.enumerate;

  var items = Children.map(children, function (child, index) {
    return React.createElement(
      'li',
      { key: index, className: styles.item },
      child
    );
  });

  if (!enumerate) {
    return React.createElement(
      'ul',
      { className: styles.itemize },
      items
    );
  }

  return React.createElement(
    'ol',
    { className: styles.enumerate },
    items
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  enumerate: PropTypes.bool.isRequired
};

List.defaultProps = {
  enumerate: false
};

export default List;