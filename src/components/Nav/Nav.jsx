import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
};


const Nav = ({ className, children, ...props }) => (
  <nav className={cx(className, styles.main)} {...props} >
    {children}
  </nav>
);


Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
