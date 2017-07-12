import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';

import Input from './index';

var IntegerInput = function IntegerInput(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      props = _objectWithoutProperties(_ref, ['min', 'max', 'step']);

  return React.createElement(Input, _extends({}, props, {
    type: 'number',
    min: min,
    max: max,
    step: step
  }));
};

IntegerInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

IntegerInput.defaultProps = {
  min: null,
  max: null,
  step: 1
};

export default IntegerInput;