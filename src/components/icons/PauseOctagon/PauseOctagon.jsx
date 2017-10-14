import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** PauseOctagon icon */
const PauseOctagon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">PauseOctagon</title>
    <path d="M15.73,3L21,8.27V15.73L15.73,21H8.27L3,15.73V8.27L8.27,3H15.73M15,16V8H13V16H15M11,16V8H9V16H11Z"/>
  </svg>
);

export default wrapInTheme(PauseOctagon);
