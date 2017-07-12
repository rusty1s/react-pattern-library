import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';

import styles from './form-field.css';

var FormField = function FormField(_ref) {
  var name = _ref.name,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['name', 'children']);

  return React.createElement(
    'div',
    _extends({}, props, { className: styles.main }),
    React.createElement(
      'label',
      { htmlFor: children.props.id, className: styles.label },
      name
    ),
    children
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormField;

// TODO ids
// how to access inputs
// how to constrain to inputs
// validationRules
// how to override className