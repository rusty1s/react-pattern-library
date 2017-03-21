import React, { PropTypes } from 'react';
import cx from 'classnames';

import TextInput from '../../atoms/Input/TextInput';
import styles from './nav.css';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const NavInput = (className, ...props) => (
  <TextInput className={cx(className, styles.navInput)} {...props} />
);

NavInput.propTypes = propTypes;
NavInput.defaultProps = defaultProps;

export default NavInput;
