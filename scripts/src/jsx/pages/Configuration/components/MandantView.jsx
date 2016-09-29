import React from 'react';

import ChangeMandantView from './ChangeMandantView.jsx';
import AddMandantView from './AddMandantView';

const MandantView = ({ currentMandantId, mandantIds, onChange, onAdd, userIsAuthorized }) => {
  let changeMandantView;
  if ((mandantIds || []).length > 1) {
    changeMandantView = (
      <ChangeMandantView
        currentMandantId={currentMandantId}
        mandantIds={mandantIds}
        onChange={onChange} />
    );
  } else {
    changeMandantView = <span>No other Mandants found :(</span>;
  }

  return (
    <div>
      {changeMandantView}
      { userIsAuthorized ? <AddMandantView onAdd={onAdd} /> : null }
    </div>
  );
};

MandantView.propTypes = {
  currentMandantId: React.PropTypes.string,
  mandantIds: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default MandantView;