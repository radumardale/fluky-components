import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FolderStar icon */
const FolderStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FolderStar</title>
    <path d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M17.94,17L15,15.28L12.06,17L12.84,13.67L10.25,11.43L13.66,11.14L15,8L16.34,11.14L19.75,11.43L17.16,13.67L17.94,17Z"/>
  </svg>
);

export default wrapInTheme(FolderStar);