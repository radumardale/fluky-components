import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Periscope icon */
const Periscope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Periscope</title>
    <path d="M12,7A2,2 0 0,1 10,9A2,2 0 0,1 8,7C7.37,7.84 7,8.87 7,10A5,5 0 0,0 12,15A5,5 0 0,0 17,10A5,5 0 0,0 12,5C11.57,5 11.16,5.05 10.77,5.15C11.5,5.45 12,6.17 12,7M12,2A8,8 0 0,1 20,10C20,11.05 19.8,12.04 19.43,12.96C17.89,17.38 13.63,22 12,22C10.37,22 6.11,17.38 4.57,12.96C4.2,12.04 4,11.05 4,10A8,8 0 0,1 12,2Z"/>
  </svg>
);

export default wrapInTheme(Periscope);
