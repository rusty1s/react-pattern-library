import React, { Component, PropTypes } from 'react';

import styles from './grid.css';

export default class Grid extends Component {
  render() {
    return (
      <div className={styles.main}>
        {this.props.children.map((child, index) => <div key={index} className={styles.item}>{child}</div>)}
      </div>
    );
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
