import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './button.css';

const Button = ({ text, onClick, disabled, tabIndex, ...props }) => {
  const classNames = cx(styles.main, {
    [`${styles.disabled}`]: disabled,
  });

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
