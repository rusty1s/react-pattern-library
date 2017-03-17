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

const NavSection = ({ className, children, ...props }) => (
  <section className={cx(className, styles.navSection)} {...props} >
    {children}
  </section>
);

NavSection.propTypes = propTypes;
NavSection.defaultProps = defaultProps;


const LeftNavSection = ({ className, children, ...props }) => (
  <NavSection className={cx(className, styles.left)} {...props} >
    {children}
  </NavSection>
);

LeftNavSection.propTypes = propTypes;
LeftNavSection.defaultProps = defaultProps;

export default LeftNavSection;


export const CenterNavSection = ({ className, children, ...props }) => (
  <NavSection className={cx(className, styles.center)} {...props} >
    {children}
  </NavSection>
);

CenterNavSection.propTypes = propTypes;
CenterNavSection.defaultProps = defaultProps;


export const RightNavSection = ({ className, children, ...props }) => (
  <NavSection className={cx(className, styles.right)} {...props} >
    {children}
  </NavSection>
);

RightNavSection.propTypes = propTypes;
RightNavSection.defaultProps = defaultProps;
