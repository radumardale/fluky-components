import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Details icon */
const Details = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Details</title>
    <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z"/>
  </svg>
);

export default wrapInTheme(Details);
