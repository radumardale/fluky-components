import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** SkipPreviousCircle icon */
const SkipPreviousCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">SkipPreviousCircle</title>
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8H10V16H8M16,8V16L11,12"/>
  </svg>
);

export default wrapInTheme(SkipPreviousCircle);
