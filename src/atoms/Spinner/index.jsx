import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './spinner.css';

const Spinner = ({ size, dim, className, ...props }) => (
  <div className={cx(
    styles.background,
    (dim ? styles.dim : null),
    className,
  )}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.main}
      viewBox="0 0 50 50"
      width={size}
      height={size}
      {...props}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        className={styles.path}
      />
    </svg>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
  dim: PropTypes.bool,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: '10em',
  dim: false,
  className: null,
};

export default Spinner;
