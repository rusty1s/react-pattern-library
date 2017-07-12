import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import TextInput from '../../atoms/Input/TextInput';
import styles from './nav.css';

var propTypes = {
  className: PropTypes.string
};

var defaultProps = {
  className: ''
};

var NavInput = function NavInput(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(TextInput, _extends({ className: cx(className, styles.input) }, props));
};

NavInput.propTypes = propTypes;
NavInput.defaultProps = defaultProps;

export default NavInput;