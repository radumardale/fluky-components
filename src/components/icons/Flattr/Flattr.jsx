import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Flattr icon */
const Flattr = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Flattr</title>
    <path d="M21,9V15A6,6 0 0,1 15,21H4.41L11.07,14.35C11.38,14.04 11.69,13.73 11.84,13.75C12,13.78 12,14.14 12,14.5V17H14A3,3 0 0,0 17,14V8.41L21,4.41V9M3,15V9A6,6 0 0,1 9,3H19.59L12.93,9.65C12.62,9.96 12.31,10.27 12.16,10.25C12,10.22 12,9.86 12,9.5V7H10A3,3 0 0,0 7,10V15.59L3,19.59V15Z"/>
  </svg>
);

export default wrapInTheme(Flattr);
