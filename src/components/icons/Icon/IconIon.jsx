import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../wrapInTheme';

// import styled from 'styled-components';

/** An IconIon component */
class IconIon extends Component {
  render() {

    const t = require('./paths/account-convert');

    return (
      <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="title">
	      <title id="title">Umbrella IconIon</title>
        <path d={t}/>
      </svg>
    );
  }
}

IconIon.propTypes = {
  /** The IconIon name available from a list */
  type : PropTypes.string.isRequired
};

export default wrapInTheme(IconIon);
