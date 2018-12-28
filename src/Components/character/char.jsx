import React, { Component } from 'react';

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Char component</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Char;