import React, { PropTypes } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const NotificationCenter = ({ children, ...props }) => (
  <div {...props}>
    <TransitionGroup>
      {children}
    </TransitionGroup>
  </div>
);

NotificationCenter.propTypes = propTypes;
NotificationCenter.defautProps = defaultProps;

export default NotificationCenter;
