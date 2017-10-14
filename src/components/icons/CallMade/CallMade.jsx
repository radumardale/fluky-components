import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CallMade icon */
const CallMade = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CallMade</title>
    <path d="M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5"/>
  </svg>
);

export default wrapInTheme(CallMade);
