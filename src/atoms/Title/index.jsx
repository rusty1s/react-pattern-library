import React, { Component, PropTypes } from 'react';

import styles from './title.css';

export default class Title extends Component {
  render() {
    return (
      <h1 className={styles.main}>
        {this.props.children}
      </h1>
  );
  }
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export const SubTitle = ({ children }) => {
  return <h2 className={styles.sub}>{children}</h2>;
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
