import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Mailbox icon */
const Mailbox = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Mailbox</title>
    <path d="M20,6H10V12H8V4H14V0H6V6H4A2,2 0 0,0 2,8V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V8A2,2 0 0,0 20,6Z"/>
  </svg>
);

export default wrapInTheme(Mailbox);
