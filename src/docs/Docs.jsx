import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import asyncComponent from './asyncComponent';
import { inject, observer } from 'mobx-react';
import VerticalMenu from '../components/molecules/VerticalMenu';
import './globalStyles';
import theme from '../theme';
import styled, { ThemeProvider } from 'styled-components';
import logoPicture from '../resources/fluky3.png';

const IconsShowcase = asyncComponent(() => import('./pages/IconsShowcase'));
const ThemeShowcase = asyncComponent(() => import('./pages/ThemeShowcase'));
const ComponentPage = asyncComponent(() => import('./ComponentPage'));

const CenterLayout = styled.div`
  width : 80%;
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
  max-width: 140px;
  min-width: 15%;
  flex: 0 0 auto;
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

const CornerRibbon = styled.div`
  z-index: 10;
  width: 200px;
  background: ${ p => p.theme.colors.accentColor };
  position: absolute;
  top: 25px;
  left: -50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: ${ p => p.theme.colors.primaryColorDark };
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  font-weight : bold;

  /* topleft */
  top: 25px;
  left: -50px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

`;

@inject('docStore')
@observer
export default class Docs extends React.Component{

  render() {

    const { menu } = this.props.docStore;

    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Page>
            <CornerRibbon>Work in progress</CornerRibbon>
            <Header>
              <CenterLayout>
                <Logo src={logoPicture}></Logo>
                <BrandTitle>fluky-components</BrandTitle>
              </CenterLayout>
            </Header>

            <ContentWrapper>
              <NavigationStyled items={menu} />
              <MainArea>
                <Route exact path="/theme" component={ThemeShowcase}/>
                <Route exact path="/icons" component={IconsShowcase}/>
                <Route path="/atoms/:component" component={ComponentPage}/>
                <Route path="/molecules/:component" component={ComponentPage}/>
              </MainArea>
            </ContentWrapper>
          </Page>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}