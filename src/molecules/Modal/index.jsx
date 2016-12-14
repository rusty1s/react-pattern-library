import React, { PropTypes } from 'react';

import styles from './modal.css';

const Modal = ({ children }) => (
  <div>{children}</div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
