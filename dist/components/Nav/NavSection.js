import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

var propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  fill: PropTypes.bool
};

var defaultProps = {
  className: '',
  left: true,
  center: false,
  right: false,
  fill: false
};

var NavSection = function NavSection(_ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      fill = _ref.fill,
      props = _objectWithoutProperties(_ref, ['className', 'children', 'left', 'center', 'right', 'fill']);

  var Left = left;

  if (center || right) {
    Left = false;
  }

  var classNames = cx(className, styles.main, (_cx = {}, _defineProperty(_cx, '' + styles.left, Left), _defineProperty(_cx, '' + styles.center, center), _defineProperty(_cx, '' + styles.right, right), _defineProperty(_cx, '' + styles.fill, fill), _cx));

  return React.createElement(
    'section',
    _extends({ className: classNames }, props),
    children
  );
};

NavSection.propTypes = propTypes;
NavSection.defaultProps = defaultProps;

export default NavSection;