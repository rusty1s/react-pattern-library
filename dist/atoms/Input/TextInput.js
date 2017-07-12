import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';

import Input from './index';

var TextInput = function TextInput(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return React.createElement(Input, _extends({}, props, { type: 'text' }));
};

export default TextInput;