import React, { PropTypes } from 'react';

import styles from './box.css';

const Box = ({ children }) => (
  <div className={styles.main}>{children}</div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
