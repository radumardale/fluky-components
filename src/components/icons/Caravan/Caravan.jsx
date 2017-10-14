import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Caravan icon */
const Caravan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Caravan</title>
    <path d="M4,4A2,2 0 0,0 2,6V17H4A3,3 0 0,0 7,20A3,3 0 0,0 10,17H22V15H19V6A2,2 0 0,0 17,4H4M5,9H9V12H5V9M12,9H16V15H12V9M7,16A1,1 0 0,1 8,17A1,1 0 0,1 7,18A1,1 0 0,1 6,17A1,1 0 0,1 7,16Z"/>
  </svg>
);

export default wrapInTheme(Caravan);
