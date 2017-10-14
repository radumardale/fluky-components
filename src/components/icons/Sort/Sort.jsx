import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Sort icon */
const Sort = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Sort</title>
    <path d="M10,13V11H18V13H10M10,19V17H14V19H10M10,7V5H22V7H10M6,17H8.5L5,20.5L1.5,17H4V7H1.5L5,3.5L8.5,7H6V17Z"/>
  </svg>
);

export default wrapInTheme(Sort);