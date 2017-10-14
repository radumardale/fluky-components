import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Tent icon */
const Tent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Tent</title>
    <path d="M4,6C4,7.19 4.39,8.27 5,9A3,3 0 0,1 2,6A3,3 0 0,1 5,3C4.39,3.73 4,4.81 4,6M2,21V19H4.76L12,4.78L19.24,19H22V21H2M12,9.19L7,19H17L12,9.19Z"/>
  </svg>
);

export default wrapInTheme(Tent);