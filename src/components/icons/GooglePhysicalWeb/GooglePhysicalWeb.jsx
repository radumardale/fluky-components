import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** GooglePhysicalWeb icon */
const GooglePhysicalWeb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">GooglePhysicalWeb</title>
    <path d="M12,1.5A9,9 0 0,1 21,10.5C21,13.11 19.89,15.47 18.11,17.11L17.05,16.05C18.55,14.68 19.5,12.7 19.5,10.5A7.5,7.5 0 0,0 12,3A7.5,7.5 0 0,0 4.5,10.5C4.5,12.7 5.45,14.68 6.95,16.05L5.89,17.11C4.11,15.47 3,13.11 3,10.5A9,9 0 0,1 12,1.5M12,4.5A6,6 0 0,1 18,10.5C18,12.28 17.22,13.89 16,15L14.92,13.92C15.89,13.1 16.5,11.87 16.5,10.5C16.5,8 14.5,6 12,6C9.5,6 7.5,8 7.5,10.5C7.5,11.87 8.11,13.1 9.08,13.92L8,15C6.78,13.89 6,12.28 6,10.5A6,6 0 0,1 12,4.5M8.11,17.65L11.29,14.46C11.68,14.07 12.32,14.07 12.71,14.46L15.89,17.65C16.28,18.04 16.28,18.67 15.89,19.06L12.71,22.24C12.32,22.63 11.68,22.63 11.29,22.24L8.11,19.06C7.72,18.67 7.72,18.04 8.11,17.65Z"/>
  </svg>
);

export default wrapInTheme(GooglePhysicalWeb);
