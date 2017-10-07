import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

import styled from 'styled-components';

const DocsPage = styled.div`
  padding : 0 12px;
`;

const ExampleSection = styled.section`
  padding : 8px 0;
`;

const PropsSection = styled.section`
  padding : 8px 0;
`;

const ComponentPage = ({component, className}) => {
  const {name, description, props, examples} = component;

  return (
    <DocsPage className={className}>
      <h2>{name}</h2>
      <p>{description}</p>

      <PropsSection>
        <h3>Props</h3>
        {
          props ?
          <Props props={props} /> :
          "This component accepts no props. One could say it is dumb as a rock."
        }
      </PropsSection>

      <ExampleSection>
        <h3>Example{examples.length > 1 && "s"}</h3>
        {
          examples.length > 0 ?
          examples.map( example => <Example key={example.code} example={example} componentName={name} /> ) :
          "No examples exist."
        }
      </ExampleSection>

    </DocsPage>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;