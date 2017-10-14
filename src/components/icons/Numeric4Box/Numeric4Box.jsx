import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Numeric4Box icon */
const Numeric4Box = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Numeric4Box</title>
    <path d="M15,17H13V13H9V7H11V11H13V7H15M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
  </svg>
);

export default wrapInTheme(Numeric4Box);
