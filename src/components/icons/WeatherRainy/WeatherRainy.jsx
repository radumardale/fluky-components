import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** WeatherRainy icon */
const WeatherRainy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">WeatherRainy</title>
    <path d="M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M14.83,15.67C16.39,17.23 16.39,19.5 14.83,21.08C14.05,21.86 13,22 12,22C11,22 9.95,21.86 9.17,21.08C7.61,19.5 7.61,17.23 9.17,15.67L12,11L14.83,15.67M13.41,16.69L12,14.25L10.59,16.69C9.8,17.5 9.8,18.7 10.59,19.5C11,19.93 11.5,20 12,20C12.5,20 13,19.93 13.41,19.5C14.2,18.7 14.2,17.5 13.41,16.69Z"/>
  </svg>
);

export default wrapInTheme(WeatherRainy);
