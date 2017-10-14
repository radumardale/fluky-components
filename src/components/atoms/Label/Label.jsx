import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

import styled from 'styled-components';

const LabelStyled = styled.label`
  font-size: ${ p => p.compact ? p.theme.typo.size.small : p.theme.typo.size.normal };
  color: ${ p => p.theme.colors.secondaryTextColor };
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
