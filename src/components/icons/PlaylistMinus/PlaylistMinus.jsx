import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** PlaylistMinus icon */
const PlaylistMinus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">PlaylistMinus</title>
    <path d="M2,16H10V14H2M12,14V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z"/>
  </svg>
);

export default wrapInTheme(PlaylistMinus);
