import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Margin icon */
const Margin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Margin</title>
    <path d="M14.63,6.78L12.9,5.78L18.5,2.08L18.1,8.78L16.37,7.78L8.73,21H6.42L14.63,6.78M17.5,12C19.43,12 21,13.74 21,16.5C21,19.26 19.43,21 17.5,21C15.57,21 14,19.26 14,16.5C14,13.74 15.57,12 17.5,12M17.5,14C16.67,14 16,14.84 16,16.5C16,18.16 16.67,19 17.5,19C18.33,19 19,18.16 19,16.5C19,14.84 18.33,14 17.5,14M7.5,5C9.43,5 11,6.74 11,9.5C11,12.26 9.43,14 7.5,14C5.57,14 4,12.26 4,9.5C4,6.74 5.57,5 7.5,5M7.5,7C6.67,7 6,7.84 6,9.5C6,11.16 6.67,12 7.5,12C8.33,12 9,11.16 9,9.5C9,7.84 8.33,7 7.5,7Z"/>
  </svg>
);

export default wrapInTheme(Margin);