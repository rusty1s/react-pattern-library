import React, { PropTypes } from 'react';

import styles from './form-field.css';

const FormField = ({ children }) => (
  <div className={styles.main}>{children}</div>
);

FormField.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormField;
