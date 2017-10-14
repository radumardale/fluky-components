import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Audiobook icon */
const Audiobook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Audiobook</title>
    <path d="M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M13,15A2,2 0 0,0 11,17A2,2 0 0,0 13,19A2,2 0 0,0 15,17V12H18V10H14V15.27C13.71,15.1 13.36,15 13,15Z"/>
  </svg>
);

export default wrapInTheme(Audiobook);
