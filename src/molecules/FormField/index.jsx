import React, { PropTypes } from 'react';

import styles from './form-field.css';

const FormField = ({ name, children, ...props }) => (
  <div {...props} className={styles.main}>
    <label htmlFor={children.props.id} className={styles.label}>{name}</label>
    {children}
  </div>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormField;

// TODO ids
// how to access inputs
// how to constrain to inputs
// validationRules
// how to override className
