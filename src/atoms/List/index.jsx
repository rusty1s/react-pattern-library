import React, { Component, PropTypes } from 'react';

import styles from './list.css';

export default class List extends Component {
  render() {
    const children = this.props.children.map((child, index) => {
      return (<li key={index}>{child}</li>);
    });

    if (!this.props.enumerate) {
      return (<ul className={styles.itemize}>{children}</ul>);
    } else {
      return (<ol className={styles.enumerate}>{children}</ol>);
    }
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  enumerate: PropTypes.bool.isRequired,
};

List.defaultProps = {
  enumerate: false,
};
