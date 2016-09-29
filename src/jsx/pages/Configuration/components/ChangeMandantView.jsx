import React from 'react';

import Select from '../../../components/Select';

const ChangeMandantView = ({ currentMandantId, mandantIds, onChange }) => {
  const options = mandantIds.map(id => {
    return {
      value: id,
      label: id,
    };
  });

  return (
    <Select value={currentMandantId} options={options} onChange={onChange} />
  );
};

ChangeMandantView.propTypes = {
  currentMandantId: React.PropTypes.string,
  mandantIds: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func.isRequired,
};

export default ChangeMandantView;