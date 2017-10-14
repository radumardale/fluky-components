import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** GarageOpen icon */
const GarageOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">GarageOpen</title>
    <path d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z"/>
  </svg>
);

export default wrapInTheme(GarageOpen);
