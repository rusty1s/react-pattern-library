import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './nav.css';

var propTypes = {
  className: PropTypes.string
};

var defaultProps = {
  className: ''
};

var NavSeparator = function NavSeparator(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var classNames = cx(className, styles.seperator);

  return React.createElement('span', _extends({
    className: classNames
  }, props));
};

NavSeparator.propTypes = propTypes;
NavSeparator.defaultProps = defaultProps;

export default NavSeparator;