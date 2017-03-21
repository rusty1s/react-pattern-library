import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from '../../atoms/Button';

import style from './nav.css';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
};

const NavButton = ({ className, ...props }) => (
  <Button className={cx(className, style.navButton)} {...props} />
);

NavButton.propTypes = propTypes;
NavButton.defaultProps = defaultProps;

export default NavButton;
