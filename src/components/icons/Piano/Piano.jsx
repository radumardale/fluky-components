import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Piano icon */
const Piano = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Piano</title>
    <path d="M4,3H20A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M4,5V19H8V13H6.75V5H4M9,19H15V13H13.75V5H10.25V13H9V19M16,19H20V5H17.25V13H16V19Z"/>
  </svg>
);

export default wrapInTheme(Piano);
