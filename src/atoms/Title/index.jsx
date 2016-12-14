import React, { PropTypes } from 'react';

import styles from './title.css';

const Title = ({ text }) => (
  <h1 className={styles.main}>{text}</h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

export const SubTitle = ({ text }) => (
  <h2 className={styles.sub}>{text}</h2>
);

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
