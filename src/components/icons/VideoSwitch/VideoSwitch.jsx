import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** VideoSwitch icon */
const VideoSwitch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">VideoSwitch</title>
    <path d="M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6A1,1 0 0,0 17,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H17A1,1 0 0,0 18,18V14.5L22,18.5V5.5L18,9.5Z"/>
  </svg>
);

export default wrapInTheme(VideoSwitch);
