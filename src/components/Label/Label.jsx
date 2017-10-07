import React, { Component } from 'react';

/** A label component */
class Label extends Component {
  render() {
    return (
      <label {...this.props}>{this.props.children}</label>
    );
  }
}

export default Label;
