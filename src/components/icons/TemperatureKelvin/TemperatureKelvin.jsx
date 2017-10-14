import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** TemperatureKelvin icon */
const TemperatureKelvin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">TemperatureKelvin</title>
    <path d="M7,5H10V11L15,5H19L13.88,10.78L19,20H15.38L11.76,13.17L10,15.15V20H7V5Z"/>
  </svg>
);

export default wrapInTheme(TemperatureKelvin);
