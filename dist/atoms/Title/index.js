import React, { PropTypes } from 'react';

import styles from './title.css';

var Title = function Title(_ref) {
  var text = _ref.text;
  return React.createElement(
    'h1',
    { className: styles.main },
    text
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;

export var SubTitle = function SubTitle(_ref2) {
  var text = _ref2.text;
  return React.createElement(
    'h2',
    { className: styles.sub },
    text
  );
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
};