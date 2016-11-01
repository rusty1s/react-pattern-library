import React, { PropTypes } from 'react';

import styles from './button.css';

const Button = ({ children, onClick, disabled, tabIndex }) => (
  <button
    className={styles.main}
    onClick={onClick}
    disabled={disabled}
    tabIndex={tabIndex}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
