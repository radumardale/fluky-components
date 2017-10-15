import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';

import styled from 'styled-components';
import { darken } from 'polished';
import {
  isNil,
  omit
} from 'ramda';

const borderColor = p => {
  switch (p.kind) {
    case 'dominant':
      return darken(0.1, p.theme.colors.primaryColorDark);
    case 'inferior':
      return darken(0.1, p.theme.colors.primaryColorLight);
    case 'risk':
      return darken(0.1, p.theme.colors.accentColor);
    default:
      return p.theme.colors.primaryColorLight;
  }
};

const textColor = p => {
  switch (p.kind) {
    case 'dominant':
      return p.theme.colors.primaryColorText;
    case 'inferior':
      return p.theme.colors.primaryTextColor;
    case 'risk':
      return p.theme.colors.primaryTextColor;
    default:
      return p.theme.colors.primaryColorDark;
  }
};

const background = p => {
  switch (p.kind) {
    case 'dominant':
      return p.theme.colors.primaryColorDark;
    case 'inferior':
      return p.theme.colors.primaryColorLight;
    case 'risk':
      return p.theme.colors.accentColor;
    default:
      return p.theme.greys[0];
  }
};

const ButtonStyled = styled.button`

  outline: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px ${ p => p.theme.greys[8] };

  &:hover {
    box-shadow: 0px 0px 2px ${ p => p.theme.greys[8] };
    color : ${ p => darken(0.05, textColor(p))};
  }

  &:active {
    outline: none;
    background : ${ p => darken(0.05, background(p))};
    box-shadow: 0px 0px 1px ${ p => p.theme.greys[6] };
  }

  font-family: ${ p => p.theme.typo.family };
  font-size: ${ p => p.compact ? p.theme.typo.size.small : p.theme.typo.size.normal };
  padding : ${ p => p.compact ? `${p.theme.gap.XXXS} ${p.theme.gap.M} ${p.theme.gap.XXS}` : `${p.theme.gap.S} ${p.theme.gap.L}` };

  color: ${ textColor };
  svg {
    margin-bottom : ${ p => p.compact ? '-3px' : '-2px' };
    height        : 16px;
    width         : 16px;
    fill          : ${ textColor };
    margin-left : ${ p => p.iconPosition === 'left' ? 0 : p.theme.gap.XXS };
    margin-right : ${ p => p.iconPosition === 'right' ? 0 : p.theme.gap.XXS };
  }


  cursor: pointer;

  border-radius : 0.2rem;
  border : 1px solid ${ borderColor };
  background : ${ background };
  background: linear-gradient( ${ background }, ${ p => darken(0.05, background(p))});

`;

/** The Button component. */
class Button extends Component {

  getIcon(side) {
    if (isNil(this.props.icon)) {
      return;
    }
    if (this.props.iconPosition === side) {
      const { icon: Icon } = this.props;
      return <Icon />;
    }
  }

  render() {

    const buttonProps = omit(['icon'])(this.props);

    return (
      <ButtonStyled {...buttonProps}>
        { this.getIcon('left') }
        {this.props.children}
        { this.getIcon('right') }
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  /** Type of button. Each `kind` represents a button type */
  kind: PropTypes.oneOf(['plain', 'dominant', 'inferior', 'risk']),
  /** On click action */
  onClick: PropTypes.func,
  /** Compact Button size */
  compact: PropTypes.bool,
  /** Buttons text. When present the button's content is ignored */
  buttonText: PropTypes.string,
  /** Icon component */
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  /** Icon's position */
  iconPosition : PropTypes.oneOf(['left', 'right'])
};

Button.defaultProps = {
  kind : 'plain',
  compact: false,
  iconPosition: 'left'
};

export default wrapInTheme(Button);
