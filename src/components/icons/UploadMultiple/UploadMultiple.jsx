import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** UploadMultiple icon */
const UploadMultiple = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">UploadMultiple</title>
    <path d="M9,14V8H5L12,1L19,8H15V14H9M5,18V16H19V18H5M19,20H5V22H19V20Z"/>
  </svg>
);

export default wrapInTheme(UploadMultiple);
