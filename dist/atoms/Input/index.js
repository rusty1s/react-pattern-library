import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './input.css';

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || _Object$getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (event) {
      _this.props.onInput(event.target.value);
    }, _this.handleKeyPress = function (event) {
      if (!_this.props.readOnly && event.key === 'Enter') {
        _this.props.onChange();
        _this.props.onEnter();
      }
    }, _this.handleBlur = function () {
      if (!_this.propsreadOnly) _this.props.onChange();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          tag = _props.tag,
          type = _props.type,
          size = _props.size,
          onInput = _props.onInput,
          onChange = _props.onChange,
          onEnter = _props.onEnter,
          className = _props.className,
          readOnly = _props.readOnly,
          required = _props.required,
          invalid = _props.invalid,
          props = _objectWithoutProperties(_props, ['tag', 'type', 'size', 'onInput', 'onChange', 'onEnter', 'className', 'readOnly', 'required', 'invalid']);

      var classNames = cx(className, styles.main, (_cx = {}, _defineProperty(_cx, '' + styles.readOnly, readOnly), _defineProperty(_cx, '' + styles.required, required), _defineProperty(_cx, '' + styles.invalid, invalid), _cx));

      var dropdownInput = type === 'dropdown';
      var dateInput = type === 'date';

      if (dateInput) {
        // TODO: To implement DateInput
      }

      var Tag = dropdownInput ? 'select' : tag;

      return React.createElement(Tag, _extends({
        size: size,
        className: classNames,
        type: type,
        onChange: onInput ? this.handleInput : null,
        onKeyPress: onChange || onEnter ? this.handleKeyPress : null,
        onBlur: onChange ? this.handleBlur : null
      }, props));
    }
  }]);

  return Input;
}(Component);

Input.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  size: PropTypes.number,
  nav: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onEnter: PropTypes.func
};
Input.defaultProps = {
  tag: 'input',
  type: 'text',
  size: 1,
  value: '',
  nav: false,
  readOnly: false,
  required: false,
  invalid: false,
  className: null,
  onInput: null,
  onChange: null,
  onEnter: null
};
export default Input;