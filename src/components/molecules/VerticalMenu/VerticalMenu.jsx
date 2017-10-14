import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapInTheme from '../../wrapInTheme';
import menuItemType from '../../shapes/menuItemShape';

import styled, { keyframes } from 'styled-components';

import { ChevronUp, ChevronDown } from '../../icons';

import { isNil } from 'ramda';

const MenuList = styled.ul`
  list-style-type : none;
  margin          : ${ p => p.nested ?  0 : p.theme.gap.S } 0;
  padding-left    : ${ p => p.nested ? p.theme.gap.S : 0 };

`;

const MenuItem = styled.li`

  // padding : ${ p => p.theme.gap.XXS} ${p => p.theme.gap.XXXS };

`;

const slide = keyframes`
  100% { left: 0; }
`;

const Link = styled.a`

  text-decoration : none;
  display         : flex;
  color           : ${ p => p.theme.colors.primaryColorDark };
  font-size       : ${ p => p.theme.typo.size.normal };
  border-bottom: 1px solid transparent;

  transition: color .5s;

  padding : ${ p => p.theme.gap.XXS} ${p => p.theme.gap.XXXS };

  &:hover {
    border-bottom: 1px solid ${ p => p.theme.colors.primaryColorDark };
  }

`;

/**
 * # VerticalMenu
 *
 * Vertical menu component. Displays vertically links with nested items.
*/
class VerticalMenu extends Component {

  getNestedMenu = children => {
    if (isNil(children) || children.length === 0) {
      return null;
    }
    return (
      <MenuList nested>
        { children.map(this.getMenuItem) }
      </MenuList>
    );
  }

  getMenuItem = (item) => {

    return (
      <MenuItem key={`menu-${item.displayName}`}>
      <ChevronUp />, <ChevronDown />
        <Link href={item.link}>{item.displayName}</Link>
        { this.getNestedMenu(item.children)}
      </MenuItem>
    );

  }

  render() {
    return (
      <MenuList>
        { this.props.items.map(this.getMenuItem) }
      </MenuList>
    );
  }
}

VerticalMenu.propTypes = {
  /** The list of menu items.  */
  items : PropTypes.arrayOf(menuItemType)
};

export default wrapInTheme(VerticalMenu);
