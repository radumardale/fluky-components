import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../wrapInTheme';

import styled from 'styled-components';

const LabelStyled = styled.label`
  font-size: ${ p => p.compact ? p.theme.typography.size.XS : p.theme.typography.size.normal };
  color: #546E7A;
`;

/** A label component */
class Label extends Component {
  render() {
    return (
      <LabelStyled {...this.props}>{this.props.children}</LabelStyled>
    );
  }
}

Label.propTypes = {
  /** Compact label size */
  compact : PropTypes.bool
};

export default wrapInTheme(Label);
