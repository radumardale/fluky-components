import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** WindowMinimize icon */
const WindowMinimize = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">WindowMinimize</title>
    <path d="M20,14H4V10H20"/>
  </svg>
);

export default wrapInTheme(WindowMinimize);
