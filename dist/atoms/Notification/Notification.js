import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './notification.css';

var propTypes = {
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  closeTitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

var defaultProps = {
  onClose: null,
  closeTitle: 'Close',
  className: null
};

var Notification = function Notification(_ref) {
  var type = _ref.type,
      onClose = _ref.onClose,
      closeTitle = _ref.closeTitle,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['type', 'onClose', 'closeTitle', 'className', 'children']);

  return React.createElement(
    'div',
    _extends({ className: cx(styles.main, styles[type], className) }, props),
    React.createElement(
      'div',
      { className: styles.content },
      children
    ),
    onClose && React.createElement(
      'button',
      { onClick: onClose, className: styles.close, title: closeTitle },
      '\xD7'
    )
  );
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;