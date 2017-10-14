import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** MessageSettings icon */
const MessageSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">MessageSettings</title>
    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z"/>
  </svg>
);

export default wrapInTheme(MessageSettings);
