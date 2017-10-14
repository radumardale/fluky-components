import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** NotificationClearAll icon */
const NotificationClearAll = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">NotificationClearAll</title>
    <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7"/>
  </svg>
);

export default wrapInTheme(NotificationClearAll);
