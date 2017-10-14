import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Umbrella icon */
const Umbrella = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Umbrella</title>
    <path d="M12,2A9,9 0 0,0 3,11H11V19A1,1 0 0,1 10,20A1,1 0 0,1 9,19H7A3,3 0 0,0 10,22A3,3 0 0,0 13,19V11H21A9,9 0 0,0 12,2Z"/>
  </svg>
);

export default wrapInTheme(Umbrella);
