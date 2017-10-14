import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Tab icon */
const Tab = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Tab</title>
    <path d="M19,19H5V5H12V9H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
  </svg>
);

export default wrapInTheme(Tab);
