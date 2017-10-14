import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Floppy icon */
const Floppy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Floppy</title>
    <path d="M4.5,22L2,19.5V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H17V15A1,1 0 0,0 16,14H7A1,1 0 0,0 6,15V22H4.5M5,4V10A1,1 0 0,0 6,11H18A1,1 0 0,0 19,10V4H5M8,16H11V20H8V16M20,4V5H21V4H20Z"/>
  </svg>
);

export default wrapInTheme(Floppy);
