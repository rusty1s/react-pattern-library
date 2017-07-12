import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from '../../atoms/Button';

import style from './nav.css';

var propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

var defaultProps = {
  className: ''
};

var NavButton = function NavButton(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(Button, _extends({ className: cx(className, style.navButton) }, props));
};

NavButton.propTypes = propTypes;
NavButton.defaultProps = defaultProps;

export default NavButton;