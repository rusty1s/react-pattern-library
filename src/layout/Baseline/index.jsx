import React, { Component, PropTypes } from 'react';

import styles from './baseline.css';

export default class Baseline extends Component {
  render() {
    return (
      <div className={styles.main}>{this.props.children}</div>
    );
  }
}

Baseline.propTypes = {
  children: PropTypes.node.isRequired,
};
