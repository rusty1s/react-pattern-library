import React, { Component, PropTypes } from 'react';

import styles from './paragraph.css';

export default class Paragraph extends Component {
  render() {
    return (
      <p className={styles.main}>
        {this.props.children}
      </p>
  );
  }
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
