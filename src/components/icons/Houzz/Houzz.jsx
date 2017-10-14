import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Houzz icon */
const Houzz = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Houzz</title>
    <path d="M12,24V16L5.1,20V12H5.1V4L12,0V8L5.1,12L12,16V8L18.9,4V12H18.9V20L12,24Z"/>
  </svg>
);

export default wrapInTheme(Houzz);
