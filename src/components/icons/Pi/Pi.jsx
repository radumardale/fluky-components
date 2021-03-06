import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Pi icon */
const Pi = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Pi</title>
    <path d="M4,5V7H6V19H8V7H14V16A3,3 0 0,0 17,19A3,3 0 0,0 20,16H18A1,1 0 0,1 17,17A1,1 0 0,1 16,16V7H18V5"/>
  </svg>
);

export default wrapInTheme(Pi);
