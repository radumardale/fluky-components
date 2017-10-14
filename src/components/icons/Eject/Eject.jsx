import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Eject icon */
const Eject = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Eject</title>
    <path d="M12,5L5.33,15H18.67M5,17H19V19H5V17Z"/>
  </svg>
);

export default wrapInTheme(Eject);
