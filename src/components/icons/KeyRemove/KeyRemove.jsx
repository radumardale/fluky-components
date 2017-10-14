import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** KeyRemove icon */
const KeyRemove = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">KeyRemove</title>
    <path d="M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6A1.5,1.5 0 0,0 5,7.5A1.5,1.5 0 0,0 6.5,9A1.5,1.5 0 0,0 8,7.5A1.5,1.5 0 0,0 6.5,6M14.59,14L16,15.41L13.41,18L16,20.59L14.59,22L12,19.41L9.41,22L8,20.59L10.59,18L8,15.41L9.41,14L12,16.59L14.59,14Z"/>
  </svg>
);

export default wrapInTheme(KeyRemove);
