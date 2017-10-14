import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Lamp icon */
const Lamp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Lamp</title>
    <path d="M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z"/>
  </svg>
);

export default wrapInTheme(Lamp);
