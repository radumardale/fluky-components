import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FilterOutline icon */
const FilterOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FilterOutline</title>
    <path d="M3,2H21V2H21V4H20.92L15,9.92V22.91L9,16.91V9.91L3.09,4H3V2M11,16.08L13,18.08V9H13.09L18.09,4H5.92L10.92,9H11V16.08Z"/>
  </svg>
);

export default wrapInTheme(FilterOutline);
