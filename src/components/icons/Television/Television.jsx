import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Television icon */
const Television = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Television</title>
    <path d="M20,17H4V5H20M20,3H4C2.89,3 2,3.89 2,5V17A2,2 0 0,0 4,19H8V21H16V19H20A2,2 0 0,0 22,17V5C22,3.89 21.1,3 20,3Z"/>
  </svg>
);

export default wrapInTheme(Television);
