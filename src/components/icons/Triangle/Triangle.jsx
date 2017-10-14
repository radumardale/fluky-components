import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Triangle icon */
const Triangle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Triangle</title>
    <path d="M1,21H23L12,2"/>
  </svg>
);

export default wrapInTheme(Triangle);
