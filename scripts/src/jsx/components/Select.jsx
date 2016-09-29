import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ options, value, onChange }) => {
  return (
    <ReactSelect options={options} value={value} onChange={(option) => onChange(option.value)}/>
  );
};

Select.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default Select;