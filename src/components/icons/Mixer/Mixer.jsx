import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Mixer icon */
const Mixer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Mixer</title>
    <path d="M5.68,3.96L11.41,11.65C11.55,11.84 11.55,12.1 11.41,12.29L5.65,20L5.5,20.18C4.76,21 3.47,21.07 2.64,20.31C1.85,19.59 1.79,18.37 2.43,17.5L6.56,11.97L2.46,6.47C1.83,5.62 1.88,4.39 2.67,3.67L2.82,3.54C3.73,2.87 5,3.05 5.68,3.96M18.32,3.96C19,3.05 20.27,2.87 21.18,3.54L21.33,3.67C22.12,4.39 22.17,5.61 21.54,6.47L17.44,11.97L21.57,17.5C22.21,18.36 22.15,19.59 21.36,20.31C20.53,21.07 19.24,21 18.5,20.18L18.35,20L12.59,12.29C12.45,12.1 12.45,11.84 12.59,11.65L18.32,3.96Z"/>
  </svg>
);

export default wrapInTheme(Mixer);