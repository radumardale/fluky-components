import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Laptop icon */
const Laptop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Laptop</title>
    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
  </svg>
);

export default wrapInTheme(Laptop);
