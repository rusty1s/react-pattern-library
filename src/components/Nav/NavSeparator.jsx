import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const NavSeparator = ({ className, ...props }) => {
  const classNames = cx(className, styles.seperator);

  return (
    <span
      className={classNames}
      {...props}
    />
  );
};

NavSeparator.propTypes = propTypes;
NavSeparator.defaultProps = defaultProps;

export default NavSeparator;
