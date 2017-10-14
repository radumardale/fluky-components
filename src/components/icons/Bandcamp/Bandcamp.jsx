import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Bandcamp icon */
const Bandcamp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Bandcamp</title>
    <path d="M22,6L15.5,18H2L8.5,6H22Z"/>
  </svg>
);

export default wrapInTheme(Bandcamp);
