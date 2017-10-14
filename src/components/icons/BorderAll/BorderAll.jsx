import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BorderAll icon */
const BorderAll = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BorderAll</title>
    <path d="M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,21H21V3H3V21Z"/>
  </svg>
);

export default wrapInTheme(BorderAll);
