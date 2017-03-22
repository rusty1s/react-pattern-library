import React, { PropTypes } from 'react';

import styles from './spinner.css';

const Spinner = ({ size, ...props }) => (
  <div className={styles.background} >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.main}
      viewBox="0 0 50 50"
      width={`${size}px`}
      height={`${size}px`}
      {...props}
    >
      <circle cx="25" cy="25" r="20" className={styles.path} />
    </svg>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: '150',
};

export default Spinner;
