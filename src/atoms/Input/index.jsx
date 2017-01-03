import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

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
  }

  static defaultProps = {
    value: '',
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
    const { readOnly, onChange, onSubmit } = this.props;

    if (!readOnly && event.key === 'Enter' && !this.state.enterPressed) {
      this.setState({ enterPressed: true });

      if (onChange) onChange();
      if (onSubmit) onSubmit();
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
      readOnly,
      placeholder,
      maxLength,
      onInput,
      onChange,
      onSubmit,
    } = this.props;

    const classNames = cx(styles.main, {
      [`${styles.readOnly}`]: readOnly,
    });

    return (
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        maxLength={maxLength}
        size={1}
        className={classNames}
        onChange={onInput ? this.handleInput : null}
        onKeyPress={onChange || onSubmit ? this.handleKeyPress : null}
        onKeyUp={onChange || onSubmit ? this.handleKeyUp : null}
        onBlur={onChange ? this.handleBlur : null}
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

// export const PasswordInput = ({ ...props }) => (
//   <Input {...props} type="password" />
// );

// export const IntegerInput = ({ min, max, ...props }) => {
//   const transformInput = value => value.replace(/[^0-9+-]/g, '');

//   return (
//     <Input
//       {...props}
//       type="number"
//       min={min}
//       max={max}
//       step={1}
//       transformInput={transformInput}
//     />
//   );
// };

// IntegerInput.propTypes = {
//   min: PropTypes.number,
//   max: PropTypes.number,
//   step: PropTypes.number,
// };
