import React, { Component, PropTypes } from 'react';

import styles from './button.css';

export default class Button extends Component {
  render() {
    // TODO: isLoading, icon

    return (
      <button
        className={styles[this.props.type]}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        tabIndex={this.props.tabIndex}
      >
        {this.props.children}
      </button>
  );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  tabIndex: PropTypes.number,
  icon: PropTypes.node,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'default',
}

export const DestructiveButton = ({ type, children, ...props }) => {
  return <Button type={'destructive'} props={props}>{children}</Button>
}

export const PrimaryButton = ({ type, children, ...props }) => {
  return <Button type={'primary'} props={props}>{children}</Button>
}
