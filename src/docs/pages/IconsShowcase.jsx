// IconsShowcase
import React from 'react';
import Input from 'fluky-components/atoms/Input';
import styled from 'styled-components';
import wrapInTheme from '../../components/wrapInTheme';
import * as Icons from 'fluky-components/icons';
import debounce from 'debounce';
import {
  toPairs,
  isEmpty
} from 'ramda';

const allIcons = toPairs(Icons);

const PageWrapper = styled.div`
  padding : 0;
`;

const SearchField = styled(Input) `
  display : flex;
  min-width: 300px;
  width: 10rem;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction : row;
  padding: ${ p => p.theme.gap.L };

  p {
    font-size : ${ p => p.theme.typo.size.small };
    margin : 0 0 0 ${ p => p.theme.gap.L };
    width: 7rem;
  }

`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SecondBar = styled.p`
  padding: 0 ${ p => p.theme.gap.L };
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;

  h2 {
    padding-left: ${ p => p.theme.gap.L };
    flex: 1 1 auto;
  }
`;

class IconsShowcase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterString : ''
    };
  }

  componentDidMount(nextProps) {
    this.setState({
      filterString : ''
    });
  }

  onFilterChanged = e => {
    this.setState({
      filterString : e.target.value
    });
  }

  render() {

    const { filterString } = this.state;

    const filtered = allIcons.filter(a => {
      return a[0].toLowerCase().indexOf(this.state.filterString.toLowerCase()) > -1;
    });

    const displayedIcons = isEmpty(this.state.filterString) ? allIcons : filtered;

    return (
      <PageWrapper className={this.props.className}>

        <TitleBar>
          <h2>Icons showcase</h2>
          <SearchField
            type="text"
            value={filterString}
            placeholder="search for icon"
            onChange={this.onFilterChanged}
          />
        </TitleBar>

        <SecondBar>
          {allIcons.length} total icons/ Displaying { filtered.length }
        </SecondBar>

        <IconsWrapper>
          {displayedIcons.map(a => {
            const name = a[0];
            const ActualIcon = a[1];
            return (
              <IconCard key={`icon-${name}`}>
                <ActualIcon />
                <p>{ name }</p>
              </IconCard>
              );
          }) }
        </IconsWrapper>

      </PageWrapper>
    )
  }
}

export default wrapInTheme(IconsShowcase);