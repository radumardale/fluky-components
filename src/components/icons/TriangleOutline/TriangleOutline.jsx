import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** TriangleOutline icon */
const TriangleOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">TriangleOutline</title>
    <path d="M12,2L1,21H23M12,6L19.53,19H4.47"/>
  </svg>
);

export default wrapInTheme(TriangleOutline);
