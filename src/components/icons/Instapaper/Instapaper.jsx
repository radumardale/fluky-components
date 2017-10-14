import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Instapaper icon */
const Instapaper = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Instapaper</title>
    <path d="M10,5A1,1 0 0,0 9,4H8V2H16V4H15A1,1 0 0,0 14,5V19A1,1 0 0,0 15,20H16V22H8V20H9A1,1 0 0,0 10,19V5Z"/>
  </svg>
);

export default wrapInTheme(Instapaper);
