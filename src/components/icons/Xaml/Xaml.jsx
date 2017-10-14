import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Xaml icon */
const Xaml = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Xaml</title>
    <path d="M18.93,12L15.46,18H8.54L5.07,12L8.54,6H15.46L18.93,12M23.77,12L19.73,19L18,18L21.46,12L18,6L19.73,5L23.77,12M0.23,12L4.27,5L6,6L2.54,12L6,18L4.27,19L0.23,12Z"/>
  </svg>
);

export default wrapInTheme(Xaml);
