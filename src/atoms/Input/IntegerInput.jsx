import React, { PropTypes } from 'react';

import Input from './index';

const IntegerInput = ({ min, max, ...props }) => (
  <Input
    {...props}
    type="number"
    min={min}
    max={max}
    step={1}
  />
);

IntegerInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

IntegerInput.defaultProps = {
  min: null,
  max: null,
};

export default IntegerInput;
