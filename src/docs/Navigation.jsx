import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import VerticalMenu from '../components/VerticalMenu';

import styled from 'styled-components';

const NavigationDrawer = styled.ul`
  list-style-type: none;
  padding : 0;
  margin : 0;
  min-width : 120px;
  color: #FFA630;
  // background: #E5E5E5;
`;

const ComponentItem = styled.li`
  padding : 4px 12px;
  background : ${ p => p.active ? '#D7E8BA' : 'none' };
  a {
    display: flex;
    color: ${ p => p.active ? '#FFA630' : '#0E4183' };
    text-decoration : none;
  }

  &:hover {
    color: #FFA630;
    background : #D7E8BA;
  }
`;

const Navigation = ({ components, className, activeComponent}) => {

  const classes = classnames(className);

  return (
    <div>
      <NavigationDrawer className={classes}>
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
      <VerticalMenu items={[]} />
    </div>
  )
}

Navigation.propTypes = {
  className : PropTypes.string,
  components: PropTypes.array.isRequired,
  activeComponent : PropTypes.string
};

export default Navigation;