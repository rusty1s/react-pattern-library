import React from 'react';
import Modal from 'react-modal';

import Button from './Button';

const Popup = ({ children, isOpen, closeAction, acceptAction }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeAction}
    >
      <div>{children}</div>
      <div>
        <button onClick={acceptAction}>Accept</button>
        <button onClick={closeAction}>Close</button>
      </div>
    </Modal>
  );
};

Popup.propTypes = {
  children: React.PropTypes.node.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  closeAction: React.PropTypes.func.isRequired,
  acceptAction: React.PropTypes.func.isRequired,
};

export default Popup;