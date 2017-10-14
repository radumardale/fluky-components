module.exports = /* eslint-disable */ [{"name":"VerticalMenu","description":"# VerticalMenu\n\nVertical menu component. Displays vertically links with nested items.","props":{"items":{"type":{"name":"arrayOf","value":{"name":"custom","raw":"menuItemType"}},"required":false,"description":"The list of menu items."}},"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nimport wrapInTheme from '../../wrapInTheme';\nimport menuItemType from '../../shapes/menuItemShape';\n\nimport styled, { keyframes } from 'styled-components';\n\nimport { isNil } from 'ramda';\n\nconst MenuList = styled.ul`\n  list-style-type : none;\n  margin          : ${ p => p.nested ?  0 : p.theme.gap.S } 0;\n  padding-left    : ${ p => p.nested ? p.theme.gap.S : 0 };\n\n`;\n\nconst MenuItem = styled.li`\n\n  // padding : ${ p => p.theme.gap.XXS} ${p => p.theme.gap.XXXS };\n\n`;\n\nconst slide = keyframes`\n  100% { left: 0; }\n`;\n\nconst Link = styled.a`\n\n  text-decoration : none;\n  display         : flex;\n  color           : ${ p => p.theme.colors.primaryColorDark };\n  font-size       : ${ p => p.theme.typo.size.normal };\n  border-bottom: 1px solid transparent;\n\n  transition: color .5s;\n\n  padding : ${ p => p.theme.gap.XXS} ${p => p.theme.gap.XXXS };\n\n  &:hover {\n    border-bottom: 1px solid ${ p => p.theme.colors.primaryColorDark };\n  }\n\n`;\n\n/**\n * # VerticalMenu\n *\n * Vertical menu component. Displays vertically links with nested items.\n*/\nclass VerticalMenu extends Component {\n\n  getNestedMenu = children => {\n    if (isNil(children) || children.length === 0) {\n      return null;\n    }\n    return (\n      <MenuList nested>\n        { children.map(this.getMenuItem) }\n      </MenuList>\n    );\n  }\n\n  getMenuItem = (item) => {\n\n    return (\n      <MenuItem key={`menu-${item.displayName}`}>\n        <Link href={item.link}>{item.displayName}</Link>\n        { this.getNestedMenu(item.children)}\n      </MenuItem>\n    );\n\n  }\n\n  render() {\n    return (\n      <MenuList>\n        { this.props.items.map(this.getMenuItem) }\n      </MenuList>\n    );\n  }\n}\n\nVerticalMenu.propTypes = {\n  /** The list of menu items.  */\n  items : PropTypes.arrayOf(menuItemType)\n};\n\nexport default wrapInTheme(VerticalMenu);\n","examples":[]}]