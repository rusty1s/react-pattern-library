import React from 'react';
import moment from 'moment';

// import Input from './index';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

console.log(moment().format());

const DateInput = () => (
  <SingleDatePicker
    id="date_input"
  />
);

export default DateInput;
