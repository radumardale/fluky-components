import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** FileLock icon */
const FileLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">FileLock</title>
    <path d="M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11A3,3 0 0,1 15,14V15H16V19H8V15H9V14C9,12.36 10.34,11 12,11M12,13A1,1 0 0,0 11,14V15H13V14C13,13.47 12.55,13 12,13Z"/>
  </svg>
);

export default wrapInTheme(FileLock);
