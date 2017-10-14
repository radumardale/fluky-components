import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ViewDay icon */
const ViewDay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ViewDay</title>
    <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z"/>
  </svg>
);

export default wrapInTheme(ViewDay);
