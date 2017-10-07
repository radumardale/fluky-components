import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

import './globalStyles';

import styled from 'styled-components';

const Page = styled.div`
  display : flex;
  min-height : 100%;
`;

const NavigationStyled = styled(Navigation)`
  height: 100%;
  max-width: 200px;
  width: 15%;
`;

const MainArea = styled(ComponentPage)`
  flex : 1 1 auto;
`;

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <Page>
        <NavigationStyled
          activeComponent={this.state.route}
          components={componentData.map(component => component.name)}
        />
        <MainArea component={component} />
      </Page>
    )
  }
}