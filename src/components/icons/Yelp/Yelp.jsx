import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Yelp icon */
const Yelp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Yelp</title>
    <path d="M10.59,2C11.23,2 11.5,2.27 11.58,2.97L11.79,6.14L12.03,10.29C12.05,10.64 12,11 11.86,11.32C11.64,11.77 11.14,11.89 10.73,11.58C10.5,11.39 10.31,11.14 10.15,10.87L6.42,4.55C6.06,3.94 6.17,3.54 6.77,3.16C7.5,2.68 9.73,2 10.59,2M14.83,14.85L15.09,14.91L18.95,16.31C19.61,16.55 19.79,16.92 19.5,17.57C19.06,18.7 18.34,19.66 17.42,20.45C16.96,20.85 16.5,20.78 16.21,20.28L13.94,16.32C13.55,15.61 14.03,14.8 14.83,14.85M4.5,14C4.5,13.26 4.5,12.55 4.75,11.87C4.97,11.2 5.33,11 6,11.27L9.63,12.81C10.09,13 10.35,13.32 10.33,13.84C10.3,14.36 9.97,14.58 9.53,14.73L5.85,15.94C5.15,16.17 4.79,15.96 4.64,15.25C4.55,14.83 4.47,14.4 4.5,14M11.97,21C11.95,21.81 11.6,22.12 10.81,22C9.77,21.8 8.81,21.4 7.96,20.76C7.54,20.44 7.45,19.95 7.76,19.53L10.47,15.97C10.7,15.67 11.03,15.6 11.39,15.74C11.77,15.88 11.97,16.18 11.97,16.59V21M14.45,13.32C13.73,13.33 13.23,12.5 13.64,11.91C14.47,10.67 15.35,9.46 16.23,8.26C16.5,7.85 16.94,7.82 17.31,8.16C18.24,9 18.91,10 19.29,11.22C19.43,11.67 19.25,12.08 18.83,12.2L15.09,13.17L14.45,13.32Z"/>
  </svg>
);

export default wrapInTheme(Yelp);
