import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

var propTypes = {
  children: PropTypes.node
};

var defaultProps = {
  children: null
};

var NotificationCenter = function NotificationCenter(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'div',
    props,
    React.createElement(
      TransitionGroup,
      null,
      children
    )
  );
};

NotificationCenter.propTypes = propTypes;
NotificationCenter.defautProps = defaultProps;

export default NotificationCenter;