import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** NearMe icon */
const NearMe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">NearMe</title>
    <path d="M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z"/>
  </svg>
);

export default wrapInTheme(NearMe);
