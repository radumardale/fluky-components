import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** CodeBrackets icon */
const CodeBrackets = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">CodeBrackets</title>
    <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z"/>
  </svg>
);

export default wrapInTheme(CodeBrackets);
