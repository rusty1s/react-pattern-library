import React, { Component, PropTypes } from 'react';

import styles from './input.css';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    readOnly: false,
    placeholder: '',
  }

  handleInput(event) {
    const { onInput } = this.props;

    if (onInput) onInput(event.target.value);
  }

  handleKeyPress(event) {
    const { readOnly, onChange, onSubmit } = this.props;

    if (!readOnly && event.key === 'Enter') {
      if (onChange) onChange();
      if (onSubmit) onSubmit();
    }
  }

  handleBlur() {
    const { readOnly, onChange } = this.props;

    if (!readOnly) {
      if (onChange) onChange();
    }
  }

  render() {
    const { type, value, readOnly, placeholder, maxLength } = this.props;
    return (
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        maxLength={maxLength}
        className={styles.main}
        onChange={::this.handleInput}
        onKeyPress={::this.handleKeyPress}
        onBlur={::this.handleBlur}
      />
    );
  }
}

export default Input;
