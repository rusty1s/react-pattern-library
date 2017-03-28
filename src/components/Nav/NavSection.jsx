import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  fill: PropTypes.bool,
};

const defaultProps = {
  className: '',
  left: true,
  center: false,
  right: false,
  fill: false,
};

const NavSection = ({ className, children, left, center, right, fill, ...props }) => {
  let Left = left;

  if (center || right) {
    Left = false;
  }

  const classNames = cx(className, styles.main, {
    [`${styles.left}`]: Left,
    [`${styles.center}`]: center,
    [`${styles.right}`]: right,
    [`${styles.fill}`]: fill,
  });

  return (
    <section className={classNames} {...props} >
      {children}
    </section>
  );
};

NavSection.propTypes = propTypes;
NavSection.defaultProps = defaultProps;

export default NavSection;
