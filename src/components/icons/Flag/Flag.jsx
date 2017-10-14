import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Flag icon */
const Flag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Flag</title>
    <path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z"/>
  </svg>
);

export default wrapInTheme(Flag);
