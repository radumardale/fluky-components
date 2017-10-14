import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import wrapInTheme from '../../wrapInTheme';
import menuItemType from '../../shapes/menuItemShape';

import styled from 'styled-components';

import MenuLeft from '../../icons/MenuLeft';
import MenuDown from '../../icons/MenuDown';

import { Link } from 'react-router-dom';
import { isNil } from 'ramda';

const MenuList = styled.ul`
  list-style-type : none;
  margin          : ${ p => p.nested ?  0 : p.theme.gap.S } 0;
  padding-left    : ${ p => p.nested ? p.theme.gap.S : 0 };

`;

const MenuItem = styled.li`

  display : flex;
  flex-direction : column;

`;

const ParentLink = styled.div`
  display : flex;
  align-items: center;
  cursor : pointer;
`;

const StyledLink = styled(Link)`

  text-decoration : none;
  display         : flex;
  flex            : 1 1 auto;
  color           : ${ p => p.theme.colors.primaryColorDark };
  font-size       : ${ p => p.theme.typo.size.normal };
  border-bottom   : 1px solid transparent;

  transition      : color .5s;

  padding : ${ p => p.theme.gap.XXS} ${p => p.theme.gap.XXXS };

  &:hover {
    border-bottom: 1px solid ${ p => p.theme.colors.primaryColorDark };
  }

`;

/**
 * Vertical menu component. Displays vertically links with nested items option.
*/
class VerticalMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openedMenus : []
    };
  }

  getNestedMenu = item => {
    if (isNil(item.children) || item.children.length === 0) {
      return null;
    }
    if (this.state.openedMenus.indexOf(item.displayName) === -1) {
      return null;
    };
    return (
      <MenuList nested>
        { item.children.map(this.getMenuItem) }
      </MenuList>
    );
  }

  getIcon = (item) => {
    if (isNil(item.children) || item.children.length === 0) {
      return null;
    }
    const index = this.state.openedMenus.indexOf(item.displayName);
    if (index >= 0) {
      return < MenuDown/>;
    }
    return (<MenuLeft />);
  }

  toggleMenu = itemName => (e) => {
    e.preventDefault();
    const index = this.state.openedMenus.indexOf(itemName);
    console.log(this.state.openedMenus, index);
    if (index === -1) {
      this.setState({
        openedMenus: [...this.state.openedMenus].concat([itemName])
      });
    } else {
      this.setState({
        openedMenus: this.state.openedMenus.splice(index, 0)
      });
    }
  }

  getMenuItem = (item) => {

    const noKids = isNil(item.children) || item.children.length === 0;
    const itemProps = noKids ? {} : {
      onClick : this.toggleMenu(item.displayName)
    };

    return (
      <MenuItem key={`menu-${item.displayName}`}>
        <ParentLink {...itemProps}>
          <StyledLink to={item.link ? item.link : '#'}>{item.displayName}</StyledLink>
          { this.getIcon(item) }
        </ParentLink>
        { this.getNestedMenu(item)}
      </MenuItem>
    );

  }

  render() {
    return (
      <MenuList className={classnames(this.props.className)}>
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
