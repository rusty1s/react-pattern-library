import React, { Component, PropTypes } from 'react';

import styles from './button';

export default class Button extends Component {
  render() {
    return (
      <button
        className={styles.default}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
  );
  }
}

// differentiate between children { text or Icon }

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  // disabled,
  // tabIndex,
  // loading,
};

// Primary Button
// Destructive Button
