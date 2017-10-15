import React from 'react';
import Example from './Example';
import Props from './Props';

import styled from 'styled-components';

import { inject, observer } from 'mobx-react';

import { find, propEq } from 'ramda';

const DocsPage = styled.div`
  padding : 0 12px;
`;

const ExampleSection = styled.section`
  padding : 8px 0;
`;

const PropsSection = styled.section`
  padding : 8px 0;
`;

@inject('docStore')
@observer
class ComponentPage extends React.Component {

  render() {

    const { docStore } = this.props;

    const activeComponent = find(propEq('name', this.props.match.params.component))(docStore.allComponents);

    const { name, description, props, examples } = activeComponent;

    return (
      <DocsPage className={this.props.className}>
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
              examples.map(example => <Example key={example.code} example={example} componentName={name} />) :
              "No examples exist."
          }
        </ExampleSection>

      </DocsPage>
    );
  }
};

export default ComponentPage;