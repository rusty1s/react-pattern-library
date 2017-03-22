import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './notification.css';

const Notification = ({ icon, children, className, ...props }) => (
  <div
    className={cx(className, styles.main)}
    {...props}
  >
    {icon}
    <div className={styles.content} >{children}</div>
  </div>
);

Notification.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Notification.defaultProps = {
  className: null,
};

const SuccessIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100" >
    <circle cx="50" cy="50" r="46" className={styles.border} />
    <g className={styles.content} >
      <polyline points="25,50 45,70 75,30" />
    </g>
  </svg>
);

const SuccessNotification = ({ children, className, ...props }) => (
  <Notification
    icon={SuccessIcon}
    className={cx(className, styles.success)}
    {...props}
  >
    {children}
  </Notification>
);

SuccessNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SuccessNotification.defaultProps = {
  className: null,
};

export default SuccessNotification;

const InfoIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100" >
    <circle cx="50" cy="50" r="46" className={styles.border} />
    <g className={styles.content} >
      <circle cx="50" cy="30" r="5" />
      <line x1="50" y1="43" x2="50" y2="73" />
    </g>
  </svg>
);

export const InfoNotification = ({ children, className, ...props }) => (
  <Notification
    icon={InfoIcon}
    className={cx(className, styles.info)}
    {...props}
  >
    {children}
  </Notification>
);

InfoNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

InfoNotification.defaultProps = {
  className: null,
};

const WarningIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100" >
    <polyline points="11,90 10,90 50,10 90,90 10,90" className={styles.border} />
    <g className={styles.content} >
      <line x1="50" y1="35" x2="50" y2="65" />
      <circle cx="50" cy="75" r="5" />
    </g>
  </svg>
);

export const WarningNotification = ({ children, className, ...props }) => (
  <Notification
    icon={WarningIcon}
    className={cx(className, styles.warning)}
    {...props}
  >
    {children}
  </Notification>
);

WarningNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

WarningNotification.defaultProps = {
  className: null,
};

const DangerIcon = (
  <svg className={styles.icon} viewBox="0 0 100 100" >
    <polyline points="11,90 10,90 50,10 90,90 10,90" className={styles.border} />
    <g className={styles.content} >
      <line x1="37" y1="52" x2="63" y2="77" />
      <line x1="37" y1="77" x2="63" y2="52" />
    </g>
  </svg>
);

export const DangerNotification = ({ children, className, ...props }) => (
  <Notification
    icon={DangerIcon}
    className={cx(className, styles.danger)}
    {...props}
  >
    {children}
  </Notification>
);

DangerNotification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DangerNotification.defaultProps = {
  className: null,
};
