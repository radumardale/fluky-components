import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ViewArray icon */
const ViewArray = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ViewArray</title>
    <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z"/>
  </svg>
);

export default wrapInTheme(ViewArray);
