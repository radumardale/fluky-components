import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** AppleIos icon */
const AppleIos = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">AppleIos</title>
    <path d="M20,9V7H16A2,2 0 0,0 14,9V11A2,2 0 0,0 16,13H18V15H14V17H18A2,2 0 0,0 20,15V13A2,2 0 0,0 18,11H16V9M11,15H9V9H11M11,7H9A2,2 0 0,0 7,9V15A2,2 0 0,0 9,17H11A2,2 0 0,0 13,15V9A2,2 0 0,0 11,7M4,17H6V11H4M4,9H6V7H4V9Z"/>
  </svg>
);

export default wrapInTheme(AppleIos);
