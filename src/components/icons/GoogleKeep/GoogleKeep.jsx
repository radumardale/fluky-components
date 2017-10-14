import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** GoogleKeep icon */
const GoogleKeep = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">GoogleKeep</title>
    <path d="M4,2H20A2,2 0 0,1 22,4V17.33L17.33,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M17,17V20.25L20.25,17H17M10,19H14V18H15V13C16.21,12.09 17,10.64 17,9A5,5 0 0,0 12,4A5,5 0 0,0 7,9C7,10.64 7.79,12.09 9,13V18H10V19M14,17H10V16H14V17M14,15H10V14H14V15M12,5A4,4 0 0,1 16,9C16,10.5 15.2,11.77 14,12.46V13H10V12.46C8.8,11.77 8,10.5 8,9A4,4 0 0,1 12,5Z"/>
  </svg>
);

export default wrapInTheme(GoogleKeep);
