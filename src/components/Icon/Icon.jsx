import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../wrapInTheme';

// import styled from 'styled-components';

/** An Icon component */
class Icon extends Component {
  render() {
    return (
      <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
	      <title id="title">Umbrella Icon</title>
        <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
      </svg>
    );
  }
}

Icon.propTypes = {
  /** The Icon name available from a list */
  type : PropTypes.string.isRequired
};

export default wrapInTheme(Icon);
