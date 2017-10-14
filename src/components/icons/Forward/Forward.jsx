import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Forward icon */
const Forward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Forward</title>
    <path d="M12,8V4L20,12L12,20V16H4V8H12Z"/>
  </svg>
);

export default wrapInTheme(Forward);
