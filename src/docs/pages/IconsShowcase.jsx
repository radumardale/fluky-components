// IconsShowcase
import React from 'react';
import Input from 'fluky-components/atoms/Input';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding : 0 12px;
`;

const SearchField = styled(Input) `
  display : flex;
  min-width: 300px;
  width: 60%;
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

    return (
      <PageWrapper className={this.props.className}>
        <h2>Icons showcase</h2>
        <SearchField
          type="text"
          value={filterString}
          placeholder="search for icon"
          onChange={this.onFilterChanged}
        />

      </PageWrapper>
    )
  }
}

export default IconsShowcase;