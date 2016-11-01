import React, { PropTypes } from 'react';

import styles from './paragraph.css';

const Paragraph = ({ children }) => (
  <p className={styles.main}>{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
