import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** StepBackward icon */
const StepBackward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">StepBackward</title>
    <path d="M19,5V19H16V5M14,5V19L3,12"/>
  </svg>
);

export default wrapInTheme(StepBackward);
