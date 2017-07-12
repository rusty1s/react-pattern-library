import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './spinner.css';

var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      dim = _ref.dim,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['size', 'dim', 'className']);

  return React.createElement(
    'div',
    {
      className: cx(styles.background, dim ? styles.dim : null, className)
    },
    React.createElement(
      'svg',
      _extends({
        xmlns: 'http://www.w3.org/2000/svg',
        className: styles.main,
        viewBox: '0 0 50 50',
        width: size,
        height: size
      }, props),
      React.createElement('circle', {
        cx: '25',
        cy: '25',
        r: '20',
        className: styles.path
      })
    )
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  dim: PropTypes.bool,
  className: PropTypes.string
};

Spinner.defaultProps = {
  size: '10em',
  dim: false,
  className: null
};

export default Spinner;
