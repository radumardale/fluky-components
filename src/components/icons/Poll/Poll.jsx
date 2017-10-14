import React from 'react';
import wrapInTheme from '../../wrapInTheme';

/** Poll icon */
const Poll = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Poll</title>
    <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"/>
  </svg>
);

export default wrapInTheme(Poll);
