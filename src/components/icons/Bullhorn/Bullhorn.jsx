import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Bullhorn icon */
const Bullhorn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Bullhorn</title>
    <path d="M16,12V16A1,1 0 0,1 15,17C14.83,17 14.67,17 14.06,16.5C13.44,16 12.39,15 11.31,14.5C10.31,14.04 9.28,14 8.26,14L9.47,17.32L9.5,17.5A0.5,0.5 0 0,1 9,18H7C6.78,18 6.59,17.86 6.53,17.66L5.19,14H5A1,1 0 0,1 4,13A2,2 0 0,1 2,11A2,2 0 0,1 4,9A1,1 0 0,1 5,8H8C9.11,8 10.22,8 11.31,7.5C12.39,7 13.44,6 14.06,5.5C14.67,5 14.83,5 15,5A1,1 0 0,1 16,6V10A1,1 0 0,1 17,11A1,1 0 0,1 16,12M21,11C21,12.38 20.44,13.63 19.54,14.54L18.12,13.12C18.66,12.58 19,11.83 19,11C19,10.17 18.66,9.42 18.12,8.88L19.54,7.46C20.44,8.37 21,9.62 21,11Z"/>
  </svg>
);

export default wrapInTheme(Bullhorn);
