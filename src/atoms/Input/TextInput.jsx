import React from 'react';

import Input from './index';

const TextInput = ({ ...props }) => (
  <Input {...props} type="text" />
);

export default TextInput;
