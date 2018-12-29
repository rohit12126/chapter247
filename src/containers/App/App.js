import React, { Component } from 'react';
import './App.css';
import Persons from '../persons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }


  render() {
    
    return (
      <div className="App">
        <h1>This is root component!</h1>
        <br />
        <Persons />
      </div>
    );
  }
}

export default App;
