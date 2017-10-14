import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Gamepad icon */
const Gamepad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Gamepad</title>
    <path d="M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z"/>
  </svg>
);

export default wrapInTheme(Gamepad);
