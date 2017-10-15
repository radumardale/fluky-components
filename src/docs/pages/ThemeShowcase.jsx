// ThemeShowcase
import React from 'react';
import styled, { withTheme } from 'styled-components';
import wrapInTheme from '../../components/wrapInTheme';
import { toPairs } from 'ramda';

const PageWrapper = styled.div`
  padding : 0 12px;
`;

const ColorsArea = styled.div`
  display : flex;
  flex-wrap: wrap;
`;

const ColorSwatchP = styled.span`
  font-size : ${ p => p.theme.typo.size.smaller };
  font-weight : bold;
  display: inline-block;
  background: white;
  margin : 0;
  padding : 0 4px;
`;

const ColorSwatch = styled.div`
  width : 110px;
  height: 40px;
  padding-left: 4px;
  padding-top: 50px;
  padding-bottom: 20px;
  background : ${ p => p.color };
`;

const Gap = styled.div`
  margin : 12px;
  background : red;
  width : ${ p => p.size };
  height : ${ p => p.size };
`;

class ThemeShowcase extends React.Component {
  render() {
    const { theme } = this.props;
    const colors = toPairs(theme.colors);
    const gaps = toPairs(theme.gap);
    const { greys } = theme;

    return (
      <PageWrapper className={this.props.className}>
        <h2>Component's theme elements</h2>
        <h3>Colors</h3>
        <ColorsArea>
          {colors.map(v => (
            <ColorSwatch
              key={`color-${v[1]}`}
              color={v[1]}
            >
              <ColorSwatchP>{v[0]}</ColorSwatchP>
              <ColorSwatchP>{v[1]}</ColorSwatchP>
            </ColorSwatch>
          ))}
        </ColorsArea>
        <h3>Greys</h3>
        <ColorsArea>
          {greys.map((g, i) => (
            <ColorSwatch
              key={`color-${g}`}
              color={g}
            >
              <ColorSwatchP>{`grey[${i}]`}</ColorSwatchP>
              <ColorSwatchP>{g}</ColorSwatchP>
            </ColorSwatch>
          ))}
        </ColorsArea>
        <h3>Gaps</h3>
        <div>
          { gaps.map((v) => (
            <Gap
              key={`gap-${v[0]}`}
              size={v[1]}
            />
          )) }
        </div>
        <h3>Typography</h3>
      </PageWrapper>
    )
  }
}

export default withTheme(wrapInTheme(ThemeShowcase));