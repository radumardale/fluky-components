import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** PrinterSettings icon */
const PrinterSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">PrinterSettings</title>
    <path d="M18,2V6H6V2H18M19,11A1,1 0 0,0 20,10A1,1 0 0,0 19,9A1,1 0 0,0 18,10A1,1 0 0,0 19,11M16,18V13H8V18H16M19,7A3,3 0 0,1 22,10V16H18V20H6V16H2V10A3,3 0 0,1 5,7H19M15,24V22H17V24H15M11,24V22H13V24H11M7,24V22H9V24H7Z"/>
  </svg>
);

export default wrapInTheme(PrinterSettings);