module.exports = /* eslint-disable */ [{"name":"Input","description":"The input component","props":{"value":{"type":{"name":"string"},"required":false,"description":"Input's value"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder text"},"onChange":{"type":{"name":"func"},"required":false,"description":"On change function"},"compact":{"type":{"name":"bool"},"required":false,"description":"Compact size input","defaultValue":{"value":"false","computed":false}}},"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport styled from 'styled-components';\n\nimport wrapInTheme from '../../wrapInTheme';\n\nconst InputStyled = styled.input`\n\n  font-family : ${ p => p.theme.typo.family };\n  font-size: ${ p => p.compact ? p.theme.typo.size.small : p.theme.typo.size.normal };\n\n  padding : ${ p => p.compact ? `${p.theme.gap.XXXS} ${p.theme.gap.XXXS}` : `${p.theme.gap.S} ${p.theme.gap.XS}`};\n`;\n\n/** The input component */\nclass Input extends Component {\n  render() {\n    return (\n      <InputStyled {...this.props}/>\n    );\n  }\n}\n\nInput.propTypes = {\n  /** Input's value */\n  value: PropTypes.string,\n  /** Placeholder text */\n  placeholder: PropTypes.string,\n  /** On change function  */\n  onChange: PropTypes.func,\n  /** Compact size input */\n  compact: PropTypes.bool\n};\n\nInput.defaultProps = {\n  compact: false\n};\n\nexport default wrapInTheme(Input);\n","examples":[]},{"name":"Label","description":"A label component","props":{"compact":{"type":{"name":"bool"},"required":false,"description":"Compact label size"}},"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nimport wrapInTheme from '../../wrapInTheme';\n\nimport styled from 'styled-components';\n\nconst LabelStyled = styled.label`\n  font-size: ${ p => p.compact ? p.theme.typo.size.small : p.theme.typo.size.normal };\n  color: #546E7A;\n`;\n\n/** A label component */\nclass Label extends Component {\n  render() {\n    return (\n      <LabelStyled {...this.props}>{this.props.children}</LabelStyled>\n    );\n  }\n}\n\nLabel.propTypes = {\n  /** Compact label size */\n  compact : PropTypes.bool\n};\n\nexport default wrapInTheme(Label);\n","examples":[]}]