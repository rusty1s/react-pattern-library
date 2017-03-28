import React, { PropTypes } from 'react';
import cx from 'classnames';

import NavInput from './NavInput';

import styles from './nav.css';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const NavSearch = ({ className, ...props }) => {
  const classNames = cx(className, styles.search);

  return (
    <NavInput
      className={classNames}
      placeholder="Search"
      {...props}
    />
  );
};

NavSearch.propTypes = propTypes;
NavSearch.defaultProps = defaultProps;

export default NavSearch;
