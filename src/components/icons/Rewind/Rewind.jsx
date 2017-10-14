import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Rewind icon */
const Rewind = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Rewind</title>
    <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z"/>
  </svg>
);

export default wrapInTheme(Rewind);
