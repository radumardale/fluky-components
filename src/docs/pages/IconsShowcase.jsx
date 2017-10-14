// IconsShowcase
import React from 'react';
import PropTypes from 'prop-types';

import Input from 'fluky-components/atoms/Input';

import styled from 'styled-components';

const PageWrapper = styled.div`
  padding : 0 12px;
`;

const SearchField = styled(Input) `
  display : flex;
  min-width: 300px;
  width: 60%;
  // margin: 0 auto;
`;

class IconsShowcase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterString : ' asdasd'
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
        <h3>Icons showcase</h3>
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

// Example.propTypes = {
//   example: PropTypes.object.isRequired,
//   componentName: PropTypes.string.isRequired
// }

export default IconsShowcase;