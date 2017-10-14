import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Pentagon icon */
const Pentagon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Pentagon</title>
    <path d="M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z"/>
  </svg>
);

export default wrapInTheme(Pentagon);
