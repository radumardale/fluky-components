import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import wrapInTheme from '../wrapInTheme';

import styled from 'styled-components';

const CheckboxStyled = styled.div`
  display : flex;
  flex-direction : ${ p => p.labelPosition === 'right' ? 'row' : 'row-reverse' };
  // font-size: ${ p => p.compact ? p.theme.typo.size.XS : p.theme.typo.size.normal };
  // color: #546E7A;
`;

const CheckboxInput = styled.input`

`;

/** A Checkbox component */
class Checkbox extends Component {

  getIcon() {
    const path = this.props.checked ? "M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" : "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z";
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="title">
      <path d={path} />
    </svg>;
  }

  getLabel() {
    return <p>Label</p>
  }

  render() {
    return (
      <CheckboxStyled>
        <CheckboxInput
          type="checkbox"
          checked={this.props.checked}
        />
        {this.getIcon()}
        {this.getLabel()}
      </CheckboxStyled>
    );
  }
}

Checkbox.propTypes = {
  /** Checkbox value */
  checked: PropTypes.bool,
  /** onChange checkbox value */
  onChange: PropTypes.func,
  /** Checkbox label text */
  labelText: PropTypes.string,
  /** Label position */
  labelPosition : PropTypes.oneOf(['left', 'right']),
  /** Compact Checkbox size */
  compact : PropTypes.bool
};

Checkbox.defaultProps = {
  labelPosition : 'right'
};

export default wrapInTheme(Checkbox);
