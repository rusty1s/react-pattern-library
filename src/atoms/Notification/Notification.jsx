import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './notification.css';

const propTypes = {
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  closeTitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  onClose: null,
  closeTitle: 'Close',
  className: null,
};

const Notification = ({ type, onClose, closeTitle, className, children, ...props }) => (
  <div className={cx(styles.main, styles[type], className)} {...props}>
    <div className={styles.content}>{children}</div>
    { onClose &&
      <button onClick={onClose} className={styles.close} title={closeTitle}>×</button>
    }
  </div>
);

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
