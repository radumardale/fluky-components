import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** TumblrReblog icon */
const TumblrReblog = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">TumblrReblog</title>
    <path d="M3.75,17L8,12.75V16H18V11.5L20,9.5V16A2,2 0 0,1 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8A2,2 0 0,1 6,6H16V2.75L20.25,7Z"/>
  </svg>
);

export default wrapInTheme(TumblrReblog);
