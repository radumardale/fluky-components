import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** EmailVariant icon */
const EmailVariant = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">EmailVariant</title>
    <path d="M12,13L2,6.76V6C2,4.89 2.89,4 4,4H20A2,2 0 0,1 22,6V6.75L12,13M22,18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V9.11L4,10.36V18H20V10.36L22,9.11V18Z"/>
  </svg>
);

export default wrapInTheme(EmailVariant);