import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Eventbrite icon */
const Eventbrite = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Eventbrite</title>
    <path d="M22,6.23C22,4.88 21.14,3.68 19.86,3.23C18.91,2.92 5.34,2 4.89,2C4.04,2.09 3.27,2.5 2.74,3.19C2.26,3.75 2,4.46 2,5.19C2,9.7 2,14.2 2,18.71C2,19.77 2.47,20.77 3.33,21.39C3.88,21.81 4.54,22.03 5.23,22.03C5.71,22.03 18,21.03 18.83,20.97C19.65,20.92 20.42,20.58 21,20C21.62,19.45 22,18.67 22,17.84C22,15.88 22,8.15 22,6.23M17.61,7.5C17.56,7.63 17.5,7.77 17.45,7.91C17.32,8.29 16.94,8.53 16.54,8.5C15.44,8.5 11.95,8.5 11.31,8.45C11.13,8.45 11.06,8.5 11.03,8.69C10.9,9.38 10.74,10.07 10.58,10.8H14.46C14.57,10.79 14.67,10.79 14.78,10.8C15.36,10.93 15.5,11.11 15.47,11.7C15.43,12 15.33,12.31 15.18,12.59C15,12.86 14.71,13 14.39,13H14.13L10.3,13C10.17,13 10.09,13 10.06,13.16L9.59,15.44V15.54H9.86L14.93,15.54C15.32,15.5 15.69,15.74 15.81,16.11C15.96,16.81 15.63,17.5 15,17.85C14.84,17.9 14.68,17.92 14.5,17.93C13.82,17.93 8.32,18.07 7.93,18.07C7.6,18.08 7.27,18 7,17.8C6.69,17.57 6.55,17.18 6.63,16.8C6.73,16.14 8.29,8.5 8.57,7.33C8.64,6.5 9.36,5.92 10.19,6C11.19,6 16,6.1 16.75,6.14C17.5,6.18 17.85,6.64 17.61,7.5Z"/>
  </svg>
);

export default wrapInTheme(Eventbrite);
