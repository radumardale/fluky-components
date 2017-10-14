import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** EmailOpen icon */
const EmailOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">EmailOpen</title>
    <path d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z"/>
  </svg>
);

export default wrapInTheme(EmailOpen);
