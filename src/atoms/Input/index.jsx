import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './input.css';

// required
// max length
// min length???
// pattern???

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    validator: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    value: '',
  }

  handleInput = (event) => {
    this.props.onInput(event.target.value);
  }

  handleKeyDown = (event) => {
    if (!this.props.readOnly && event.key === 'Enter') {
      this.props.onChange();
      this.props.onEnter();
    }
  }

  handleBlur = () => {
    if (!this.propsreadOnly) this.props.onChange();
  }

  render() {
    const { value, onInput, onChange, onEnter, className, validator, ...props } = this.props;

    const errors = validator ? validator(value) : null;

    const classNames = cx(className, styles.wrapper, {
      [`${styles.readOnly}`]: this.props.readOnly,
      [`${styles.required}`]: this.props.required,
      [`${styles.invalid}`]: errors,
    });

    return (
      <div className={classNames}>
        <input
          size={1}
          onChange={onInput ? this.handleInput : null}
          onKeyDown={onChange || onEnter ? this.handleKeyDown : null}
          onBlur={onChange ? this.handleBlur : null}
          {...props}
        />
        <span />
      </div>
    );
  }
}
