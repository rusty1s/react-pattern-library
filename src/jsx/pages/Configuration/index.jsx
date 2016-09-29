import React from 'react';
import { render } from 'react-dom';

import Configuration from './Configuration';
import data from './test/data';

const element = document.querySelector('#configuration #content');

if (element) {
  render(
    <Configuration {...data} />,
    element,
  );
}