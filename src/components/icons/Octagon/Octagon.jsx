import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

/** Octagon icon */
const Octagon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="title">Octagon</title>
    <path d="M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27"/>
  </svg>
);

export default wrapInTheme(Octagon);
