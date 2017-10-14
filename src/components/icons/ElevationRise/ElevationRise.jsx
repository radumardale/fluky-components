import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ElevationRise icon */
const ElevationRise = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ElevationRise</title>
    <path d="M3,21V17.29L10.78,12.8L14.55,15L21,11.25V21H3M21,8.94L14.55,12.67L10.78,10.5L3,15V12.79L10.78,8.3L14.55,10.5L21,6.75V8.94Z"/>
  </svg>
);

export default wrapInTheme(ElevationRise);