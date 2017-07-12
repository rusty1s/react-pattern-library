import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import NavInput from './NavInput';

import styles from './nav.css';

var propTypes = {
  className: PropTypes.string
};

var defaultProps = {
  className: ''
};

var NavSearch = function NavSearch(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var classNames = cx(className, styles.search);

  return React.createElement(NavInput, _extends({
    className: classNames,
    placeholder: 'Search'
  }, props));
};

NavSearch.propTypes = propTypes;
NavSearch.defaultProps = defaultProps;

export default NavSearch;