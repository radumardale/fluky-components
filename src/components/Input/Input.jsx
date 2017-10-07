import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import wrapInTheme from '../wrapInTheme';

const InputStyled = styled.input`

  font-size: ${ p => p.compact ? p.theme.typography.size.XS : p.theme.typography.size.normal };

  padding : ${ p => p.compact ? `${p.theme.gap.XS} ${p.theme.gap.XS}` : `${p.theme.gap.M} ${p.theme.gap.S}`};
`;

/** The input component */
class Input extends Component {
  render() {
    return (
      <InputStyled {...this.props}/>
    );
  }
}

Input.propTypes = {
  /** Input's value */
  value: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** On change function  */
  onChange: PropTypes.func,
  /** Compact size input */
  compact: PropTypes.bool
};

Input.defaultProps = {
  compact: false
};

export default wrapInTheme(Input);
