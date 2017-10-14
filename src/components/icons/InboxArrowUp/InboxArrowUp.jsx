import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** InboxArrowUp icon */
const InboxArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">InboxArrowUp</title>
    <path d="M14,14H10V11H8L12,7L16,11H14V14M16,11M5,15V5H19V15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3"/>
  </svg>
);

export default wrapInTheme(InboxArrowUp);
