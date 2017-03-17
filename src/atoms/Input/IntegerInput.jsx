import React, { PropTypes } from 'react';

import Input from './index';

const IntegerInput = ({ min, max, step, ...props }) => (
  <Input
    {...props}
    type="number"
    min={min}
    max={max}
    step={step}
  />
);

IntegerInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

IntegerInput.defaultProps = {
  min: null,
  max: null,
  step: 1,
};

export default IntegerInput;
