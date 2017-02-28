import React, { PropTypes } from 'react';

import styles from './spinner.css';

const Spinner = ({ size, ...props }) => (
  <div className={styles.background}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.main}
      viewBox="0 0 50 50"
      width={size}
      height={size}
      {...props}
    >
      <circle className={styles.path} />
    </svg>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: '150px',
};

export default Spinner;
