import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FontAwesome icon */
const FontAwesome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FontAwesome</title>
    <path d="M6,3A2.5,2.5 0 0,1 8.5,5.5C8.5,6.53 7.88,7.41 7,7.79V8.66C8.11,8.36 9.72,8 11,8C12.15,8 12.89,8.22 13.54,8.42C14.13,8.6 14.65,8.75 15.5,8.75C17.13,8.75 18.4,8.18 18.54,8.11C18.68,8.04 18.84,8 19,8A1,1 0 0,1 20,9V17C20,17.38 19.79,17.72 19.45,17.89C19.38,17.93 17.71,18.75 15.5,18.75C14.39,18.75 13.45,18.55 12.54,18.35C11.69,18.17 10.89,18 10,18C8.85,18 7.67,18.39 7,18.66V22H5V7.79C4.12,7.41 3.5,6.53 3.5,5.5A2.5,2.5 0 0,1 6,3Z"/>
  </svg>
);

export default wrapInTheme(FontAwesome);