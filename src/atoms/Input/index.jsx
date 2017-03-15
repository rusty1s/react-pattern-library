import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './input.css';

export default class Input extends Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string,
    size: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    invalid: PropTypes.bool,
    className: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
  };

  static
  defaultProps = {
    tag: 'input',
    type: 'text',
    size: '1',
    value: '',
    readOnly: false,
    required: false,
    invalid: false,
    className: null,
    onInput: null,
    onChange: null,
    onEnter: null,
  };

  handleInput = (event) => {
    this.props.onInput(event.target.value);
  };

  handleKeyPress = (event) => {
    if (!this.props.readOnly && event.key === 'Enter') {
      this.props.onChange();
      this.props.onEnter();
    }
  };

  handleBlur = () => {
    if (!this.propsreadOnly) this.props.onChange();
  };

  render() {
    const {
      tag,
      type,
      size,
      onInput,
      onChange,
      onEnter,
      className,
      invalid,
      ...props
    } = this.props;

    const classNames = cx(className, styles.main, {
      [`${styles.readOnly}`]: this.props.readOnly,
      [`${styles.required}`]: this.props.required,
      [`${styles.invalid}`]: invalid,
    });

    const dropdownInput = type === 'dropdown';
    const Tag = dropdownInput ? 'select' : tag;

    return (
      <Tag
        size={size}
        className={classNames}
        onChange={onInput ? this.handleInput : null}
        onKeyPress={onChange || onEnter ? this.handleKeyPress : null}
        onBlur={onChange ? this.handleBlur : null}
        {...props}
      />
    );
  }
}
