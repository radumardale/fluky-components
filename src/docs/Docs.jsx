import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import atomsData from '../../config/atomsData';
import moleculesData from '../../config/moleculesData';

import VerticalMenu from '../components/molecules/VerticalMenu';

import './globalStyles';

import theme from '../theme';

import styled, { ThemeProvider } from 'styled-components';

import logoPicture from '../resources/fluky3.png';

const CenterLayout = styled.div`
  max-width: 910px;
  display: flex;
  margin: 8px auto;
`;

const BrandTitle = styled.h3`
  font-style : '';
  font-weight : normal;
  color: ${ p => p.theme.colors.primaryColorText };
  margin-left : ${ p => p.theme.gap.S };
  text-stroke : 1px red;
  // text-shadow: 1px 1px ${ p => p.theme.colors.secondaryTextColor };
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

const NavigationStyled = styled(Navigation)`
  max-width: 200px;
  width: 15%;
`;

const MainArea = styled(ComponentPage)`
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

    const menu = [ {
      displayName: 'Atoms',
      children : atomsData.map(dataToMenuItem)
    }, {
      displayName: 'Molecules',
      children: moleculesData.map(dataToMenuItem)
    } ];

    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Header>
            <CenterLayout>
              <Logo src={logoPicture}></Logo>
              <BrandTitle>fluky-components</BrandTitle>
            </CenterLayout>
          </Header>

          <ContentWrapper>
            <VerticalMenu items ={menu}/>
            <MainArea component={component} />
          </ContentWrapper>
        </Page>
      </ThemeProvider>
    )
  }
}