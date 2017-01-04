import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './input.css';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    validation: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    required: true,
    readOnly: false,
  }

  state = {
    enterPressed: false,
  }

  handleInput = (event) => {
    const { onInput } = this.props;
    const { value } = event.target;

    if (onInput) onInput(value);
  }

  handleKeyPress = (event) => {
    const { readOnly, onChange, onEnter } = this.props;

    if (!readOnly && event.key === 'Enter' && !this.state.enterPressed) {
      this.setState({ enterPressed: true });

      if (onChange) onChange();
      if (onEnter) onEnter();
    }
  }

  handleKeyUp = (event) => {
    const { readOnly } = this.props;

    if (!readOnly && event.key === 'Enter') {
      this.setState({ enterPressed: false });
    }
  }

  handleBlur = () => {
    const { readOnly, onChange } = this.props;

    if (!readOnly && onChange) onChange();
  }

  render() {
    const {
      type,
      value,
      id,
      required,
      readOnly,
      placeholder,
      maxLength,
      onInput,
      onChange,
      onEnter,
      ...props
    } = this.props;

    const classNames = cx(styles.main, {
      [`${styles.readOnly}`]: readOnly,
    });

    return (
      <input
        type={type}
        value={value}
        id={id}
        required={required}
        readOnly={readOnly}
        placeholder={placeholder}
        maxLength={maxLength}
        size={1}
        className={classNames}
        onChange={onInput ? this.handleInput : null}
        onKeyPress={onChange || onEnter ? this.handleKeyPress : null}
        onKeyUp={onChange || onEnter ? this.handleKeyUp : null}
        onBlur={onChange ? this.handleBlur : null}
        {...props}
      />
    );
  }
}

const TextInput = ({ ...props }) => (
  <Input {...props} type="text" />
);

export default TextInput;

export const PasswordInput = ({ ...props }) => (
  <Input {...props} type="password" />
);

export const IntegerInput = ({ min, max, ...props }) => (
  <Input {...props} type="number" min={min} max={max} step={1} />
);

IntegerInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
