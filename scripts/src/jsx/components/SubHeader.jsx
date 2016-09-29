import React from 'react';

const SubHeader = ({ children }) => {
  return (
    <h2>{children}</h2>
  );
};

SubHeader.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default SubHeader;