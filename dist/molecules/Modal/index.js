import React, { PropTypes } from 'react';

// import styles from './modal.css';

var Modal = function Modal(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    null,
    children
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;