import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FileMusic icon */
const FileMusic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FileMusic</title>
    <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M9,16A2,2 0 0,0 7,18A2,2 0 0,0 9,20A2,2 0 0,0 11,18V13H14V11H10V16.27C9.71,16.1 9.36,16 9,16Z"/>
  </svg>
);

export default wrapInTheme(FileMusic);
