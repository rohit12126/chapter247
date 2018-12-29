import React, { Component } from 'react';
import PersonComponent from '../../components/person/person';

class Persons extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>This is person jsx</h2>
        <PersonComponent />
      </div>
    );
  }

}

export default Persons;
