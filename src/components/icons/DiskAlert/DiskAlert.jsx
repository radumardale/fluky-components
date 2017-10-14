import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** DiskAlert icon */
const DiskAlert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">DiskAlert</title>
    <path d="M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14M10,4A8,8 0 0,0 2,12A8,8 0 0,0 10,20A8,8 0 0,0 18,12A8,8 0 0,0 10,4M20,12H22V7H20M20,16H22V14H20V16Z"/>
  </svg>
);

export default wrapInTheme(DiskAlert);
