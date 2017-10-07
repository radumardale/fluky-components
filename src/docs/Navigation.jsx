import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import styled from 'styled-components';

const NavigationDrawer = styled.ul`
  list-style-type: none;
  padding : 0;
  margin : 0;
  min-width : 120px;
  color: #263238;
`;

const BrandItem = styled.li`
  font-size : 10px;
  padding : 12px 4px;
`;

const ComponentItem = styled.li`
  padding : 4px 12px;
  background : ${ p => p.active ? '#E0F7FA' : 'none' };
  a {
    display: flex;
    color: #0E4183;
    text-decoration : none;
  }

  &:hover {
    background : #E0F7FA;
  }
`;

const Navigation = ({ components, className, activeComponent}) => {

  const classes = classnames(className);

  return (
    <NavigationDrawer className={classes}>
      <BrandItem>
        fluky-components
      </BrandItem>
      {
        components.map( name => {
          return (
            <ComponentItem
              active={activeComponent===name}
              key={name}
            >
              <a href={`#${name}`}>{name}</a>
            </ComponentItem>
          )
        })
      }
    </NavigationDrawer>
  )
}

Navigation.propTypes = {
  className : PropTypes.string,
  components: PropTypes.array.isRequired,
  activeComponent : PropTypes.string
};

export default Navigation;