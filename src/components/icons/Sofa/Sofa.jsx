import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Sofa icon */
const Sofa = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Sofa</title>
    <path d="M7,6H9A2,2 0 0,1 11,8V12H5V8A2,2 0 0,1 7,6M15,6H17A2,2 0 0,1 19,8V12H13V8A2,2 0 0,1 15,6M1,9H2A1,1 0 0,1 3,10V12A2,2 0 0,0 5,14H19A2,2 0 0,0 21,12V11L21,10A1,1 0 0,1 22,9H23A1,1 0 0,1 24,10V19H21V17H3V19H0V10A1,1 0 0,1 1,9Z"/>
  </svg>
);

export default wrapInTheme(Sofa);