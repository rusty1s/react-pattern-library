import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './button.css';

const Button = ({ text, onClick, disabled, className, tabIndex, ...props }) => {
  const classNames = cx(className, styles.main, {
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
  className: PropTypes.string,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
