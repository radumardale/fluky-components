import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** ViewAgenda icon */
const ViewAgenda = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">ViewAgenda</title>
    <path d="M20,3H3A1,1 0 0,0 2,4V10A1,1 0 0,0 3,11H20A1,1 0 0,0 21,10V4A1,1 0 0,0 20,3M20,13H3A1,1 0 0,0 2,14V20A1,1 0 0,0 3,21H20A1,1 0 0,0 21,20V14A1,1 0 0,0 20,13Z"/>
  </svg>
);

export default wrapInTheme(ViewAgenda);
