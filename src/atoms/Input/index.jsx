import React, { Component, PropTypes } from 'react';

import styles from './input.css';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    transformInput: PropTypes.func,
  }

  handleInput(event) {
    const { onInput, transformInput } = this.props;
    let { value } = event.target;

    if (transformInput) value = transformInput(value);
    if (onInput) onInput(value);
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

    if (!readOnly && onChange) onChange();
  }

  render() {
    const { type, value, readOnly, placeholder, maxLength, ...props } = this.props;

    return (
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        maxLength={maxLength}
        className={styles.main}
        onKeyPress={::this.handleKeyPress}
        onChange={::this.handleInput}
        onBlur={::this.handleBlur}
        {...props}
      />
    );
  }
}

export default Input;

export const TextInput = ({ ...props }) => (
  <Input {...props} type="text" />
);

export const PasswordInput = ({ ...props }) => (
  <Input {...props} type="password" />
);

export const IntegerInput = ({ min, max, ...props }) => {
  const transformInput = value => value.replace(/[^0-9+-]/g, '');

  return (
    <Input
      {...props}
      type="number"
      min={min}
      max={max}
      step={1}
      transformInput={transformInput}
    />
  );
};

IntegerInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
