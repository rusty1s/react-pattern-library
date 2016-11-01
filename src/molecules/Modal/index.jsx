import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';

import Title from '../../atoms/Title';

import styles from './modal.css';

const Modal = ({ children, title }) => (
  <ReactModal
    isOpen
    className={styles.main}
    overlayClassName={styles.overlay}
  >
    <Title>{title}</Title>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
