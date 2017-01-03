import React, { PropTypes } from 'react';

import styles from './form-field.css';

const FormField = ({ name, children }) => (
  <div className={styles.main}>
    <label htmlFor={'12'}>{name}</label>
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
