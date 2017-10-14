import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Bowl icon */
const Bowl = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Bowl</title>
    <path d="M22,15A7,7 0 0,1 15,22H9A7,7 0 0,1 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z"/>
  </svg>
);

export default wrapInTheme(Bowl);
