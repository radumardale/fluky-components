import React from 'react';
// import Navigation from './Navigation';
// import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import atomsData from '../../config/atomsData';
import moleculesData from '../../config/moleculesData';
import asyncComponent from './asyncComponent';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import VerticalMenu from '../components/molecules/VerticalMenu';

import './globalStyles';

import theme from '../theme';

import styled, { ThemeProvider } from 'styled-components';

import logoPicture from '../resources/fluky3.png';

const IconsShowcase = asyncComponent(() => import('./pages/IconsShowcase'));

const CenterLayout = styled.div`
  max-width: 910px;
  display: flex;
  margin: 8px auto;
`;

const BrandTitle = styled.h3`
  font-style : '';
  font-weight : normal;
  color: ${ p => p.theme.colors.primaryColorText };
  margin-left : ${ p => p.theme.gap.M };
  text-shadow:
  -1px -1px 0 ${ p => p.theme.greys[10] },
   1px -1px 0 ${ p => p.theme.greys[10] },
   -1px 1px 0 ${ p => p.theme.greys[10] },
    1px 1px 0 ${ p => p.theme.greys[10] };
`;

const Logo = styled.img`
  flex       : 0 0 auto;
  align-self : center;
  height     : 2.5em;
`;

const Page = styled.div`
  display : flex;
  min-height : 100%;
`;

const Header = styled.header`
  height     : 5rem;
  width      : 100%;
  position   : absolute;
  top        : 0;
  left       : 0;
  background : ${ p => p.theme.colors.primaryColorDark };
  box-shadow:         0px 3px 5px rgba(100, 100, 100, 0.5);
`;

const NavigationStyled = styled(VerticalMenu)`
  max-width: 20rem;
  width: 15%;
`;

const MainArea = styled.div`
  flex : 1 1 auto;
`;

const ContentWrapper = styled.div`
  width : 80%;
  max-width: 910px;
  display: flex;
  margin: 8px auto;
`;

const dataToMenuItem = component => {
  return {
    displayName: component.name,
    link: `#${component.name}`
  };
};

export default class Docs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    });
  }

  render() {
    const { route } = this.state;

    const menu = [{
      displayName: 'Icons',
      link: '/icons'
    },{
      displayName: 'Atoms',
      children : atomsData.map(dataToMenuItem)
    }, {
      displayName: 'Molecules',
      children: moleculesData.map(dataToMenuItem)
    } ];

    const allComponents = atomsData.concat(moleculesData);
    const component = route ? allComponents.filter( component => component.name === route)[0] : componentData[0];

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Page>
            <Header>
              <CenterLayout>
                <Logo src={logoPicture}></Logo>
                <BrandTitle>fluky-components</BrandTitle>
              </CenterLayout>
            </Header>

            <ContentWrapper>
              <NavigationStyled items={menu} />
              <MainArea>
                {/* <ComponentPage component={component} /> */}
                {/* <Route exact path="/icons" component={IconsShowcase}/> */}
                {/* <Route exact path="/icons" component={asyncComponent(() => import('./pages/IconsShowcase'))}/> */}
                <Route exact path="/icons" component={IconsShowcase}/>
                {/* <Route exact path="/components" component={IconsShowcase}/> */}
              </MainArea>
            </ContentWrapper>
          </Page>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}