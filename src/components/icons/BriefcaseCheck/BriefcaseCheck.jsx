import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BriefcaseCheck icon */
const BriefcaseCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BriefcaseCheck</title>
    <path d="M10.5,17.5L7,14L8.41,12.59L10.5,14.67L15.68,9.5L17.09,10.91M10,4H14V6H10M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V8C22,6.89 21.11,6 20,6Z"/>
  </svg>
);

export default wrapInTheme(BriefcaseCheck);
