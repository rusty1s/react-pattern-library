import React, { PropTypes, Children } from 'react';

import styles from './list.css';

const List = ({ children, enumerate }) => {
  const items = Children.map(children, (child, index) => (
    <li key={index} className={styles.item}>{child}</li>
  ));

  if (!enumerate) {
    return (
      <ul className={styles.itemize}>{items}</ul>
    );
  }

  return (
    <ol className={styles.enumerate}>{items}</ol>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  enumerate: PropTypes.bool.isRequired,
};

List.defaultProps = {
  enumerate: false,
};

export default List;
