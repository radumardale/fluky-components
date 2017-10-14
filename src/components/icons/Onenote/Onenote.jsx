import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Onenote icon */
const Onenote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Onenote</title>
    <path d="M1.96,4.8L14,3.08V5H20L21,5A1,1 0 0,1 22,6V10A1,1 0 0,1 21,11H20V19H14V21L1.96,19.21V4.8M11,16.75V8.25L9,8.5V12.75L7,8.75L5,9V16L6.5,16.25V10.75L9,16.5L11,16.75M14,14H18V13H14V14M14,11H18V10H14V11M14,8H18V7H14V8M14,16V17H18V16H14Z"/>
  </svg>
);

export default wrapInTheme(Onenote);
