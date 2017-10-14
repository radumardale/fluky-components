import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Rdio icon */
const Rdio = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Rdio</title>
    <path d="M19.29,10.84C19.35,11.22 19.38,11.61 19.38,12C19.38,16.61 15.5,20.35 10.68,20.35C5.87,20.35 2,16.61 2,12C2,7.39 5.87,3.65 10.68,3.65C11.62,3.65 12.53,3.79 13.38,4.06V9.11C13.38,9.11 10.79,7.69 8.47,9.35C6.15,11 6.59,12.76 6.59,12.76C6.59,12.76 6.7,15.5 9.97,15.5C13.62,15.5 14.66,12.19 14.66,12.19V4.58C15.36,4.93 16,5.36 16.65,5.85C18.2,6.82 19.82,7.44 21.67,7.39C21.67,7.39 22,7.31 22,8C22,8.4 21.88,8.83 21.5,9.25C21.5,9.25 20.78,10.33 19.29,10.84Z"/>
  </svg>
);

export default wrapInTheme(Rdio);
