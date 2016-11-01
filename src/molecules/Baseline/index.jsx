import React, { PropTypes } from 'react';

import styles from './baseline.css';

const Baseline = ({ children }) => (
  <div className={styles.main}>{children}</div>
);

Baseline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Baseline;
