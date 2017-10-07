import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

import styled from 'styled-components';

const ExampleWrapper = styled.div`
  padding : 0 12px;

`;

const ExampleTitle = styled.div`
  display: flex;
  align-items : center;

  p:first-child {
    flex: 1 1 auto;
  }
`;

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.

    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <ExampleWrapper className={this.props.className}>
        <ExampleTitle>
          {description && <p>{description}</p>}
          <a href="" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </ExampleTitle>


        <ExampleComponent />

        {showCode && <CodeExample>{code}</CodeExample>}
      </ExampleWrapper>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;