import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

var propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

var defaultProps = {
  className: ''
};

var Nav = function Nav(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  return React.createElement(
    'nav',
    _extends({ className: cx(className, styles.main) }, props),
    children
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;