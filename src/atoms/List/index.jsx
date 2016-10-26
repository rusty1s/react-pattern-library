import React, { Component, PropTypes } from 'react';

import styles from './list.css';

export default class List extends Component {
  render() {
    return (
      <ul className={styles.default}>
        {this.props.children.map((child, index) => (
          <li key={index}>
            {child}
          </li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  enumerate: PropTypes.bool.isRequired,
};

List.defaultProps = {
  enumerate: false,
};
