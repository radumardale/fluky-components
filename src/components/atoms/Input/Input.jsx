import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import wrapInTheme from '../../wrapInTheme';

const InputStyled = styled.input`

  font-family : ${ p => p.theme.typo.family };
  font-size: ${ p => p.compact ? p.theme.typo.size.small : p.theme.typo.size.normal };

  padding : ${ p => p.compact ? `${p.theme.gap.XXXS} ${p.theme.gap.XXXS}` : `${p.theme.gap.S} ${p.theme.gap.XS}`};
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
