import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Steering icon */
const Steering = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Steering</title>
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.1,4 19.5,7.1 20,11H17C16.5,9.9 14.4,9 12,9C9.6,9 7.5,9.9 7,11H4C4.5,7.1 7.9,4 12,4M4,13H7C7.2,14.3 8.2,16.6 11,17V20C7.4,19.6 4.4,16.6 4,13M13,20V17C15.8,16.6 16.7,14.3 17,13H20C19.6,16.6 16.6,19.6 13,20Z"/>
  </svg>
);

export default wrapInTheme(Steering);
