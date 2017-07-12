import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';

import Input from './index';

var Dropdown = function Dropdown(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return React.createElement(Input, _extends({}, props, { type: 'dropdown' }));
};

export default Dropdown;