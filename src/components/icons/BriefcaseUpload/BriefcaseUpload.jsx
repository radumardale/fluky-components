import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BriefcaseUpload icon */
const BriefcaseUpload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BriefcaseUpload</title>
    <path d="M20,6A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4L10,2H14L16,4V6H20M10,4V6H14V4H10M12,9L7,14H10V18H14V14H17L12,9Z"/>
  </svg>
);

export default wrapInTheme(BriefcaseUpload);
