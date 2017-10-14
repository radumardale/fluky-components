import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** BriefcaseDownload icon */
const BriefcaseDownload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">BriefcaseDownload</title>
    <path d="M12,19L7,14H10V10H14V14H17M10,4H14V6H10M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z"/>
  </svg>
);

export default wrapInTheme(BriefcaseDownload);
