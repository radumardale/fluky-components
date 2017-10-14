import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Trello icon */
const Trello = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Trello</title>
    <path d="M4,3H20A1,1 0 0,1 21,4V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V4A1,1 0 0,1 4,3M5.5,5A0.5,0.5 0 0,0 5,5.5V17.5A0.5,0.5 0 0,0 5.5,18H10.5A0.5,0.5 0 0,0 11,17.5V5.5A0.5,0.5 0 0,0 10.5,5H5.5M13.5,5A0.5,0.5 0 0,0 13,5.5V11.5A0.5,0.5 0 0,0 13.5,12H18.5A0.5,0.5 0 0,0 19,11.5V5.5A0.5,0.5 0 0,0 18.5,5H13.5Z"/>
  </svg>
);

export default wrapInTheme(Trello);
