import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './button.css';

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      props = _objectWithoutProperties(_ref, ['text', 'onClick', 'disabled', 'className', 'tabIndex']);

  var classNames = cx(className, styles.main, _defineProperty({}, '' + styles.disabled, disabled));

  return React.createElement(
    'button',
    _extends({
      className: classNames,
      onClick: onClick,
      disabled: disabled,
      tabIndex: tabIndex
    }, props),
    text
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tabIndex: PropTypes.number
};

Button.defaultProps = {
  disabled: false,
  className: null,
  tabIndex: null
};

export default Button;