import React from 'react';
import PropTypes from 'prop-types';

import { isNil, compose, join, pluck } from 'ramda';

import wrapInTheme from '../components/wrapInTheme';

import styled from 'styled-components';

const PropsTable = styled.table`
  border-collapse: collapse;
  min-width: 50%;
  width: 100%;
`;

const TableHead = styled.thead`
  font-size : 14px;
  background : ${ p => p.theme.colors.primaryColorLight };
  color: ${ p => p.theme.colors.primaryTextColor };
  text-align : left;
  th {
    padding : 4px 4px;
  }
`;

const TableBody = styled.tbody`

  font-size : 12px;
  font-family: Monospace;

  tr {
    margin : 0;
    padding : 0;
    // border-bottom : 1px solid lightgrey;
  }
  td {
    margin : 0;
    padding : 8px 4px;
    border-bottom : 1px solid lightgrey;
  }
`;

// toList :: Array -> String
const toList = compose(join(', '), pluck('value'));

const getType = type => {
  if (isNil(type)) {
    return '';
  }
  if (type.name === 'enum') {
    return toList(type.value);
  }
  return type.name;
}

const Props = ({props}) => {
  return (
    <PropsTable className="props">
      <TableHead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </TableHead>
      <TableBody>
      {
          Object.keys(props).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{props[key].description}</td>
              <td>{getType(props[key].type)}</td>
              <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
              <td>{props[key].required && "X"}</td>
            </tr>
          );
        })
      }
      </TableBody>
    </PropsTable>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default wrapInTheme(Props);