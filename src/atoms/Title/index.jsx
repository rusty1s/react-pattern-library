import React, { PropTypes } from 'react';

import styles from './title.css';

const Title = ({ children }) => (
  <h1 className={styles.main}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;

export const SubTitle = ({ children }) => (
  <h2 className={styles.sub}>{children}</h2>
);

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
