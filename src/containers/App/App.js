import React, { Component } from 'react';
import './App.css';

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
        This is root component!
      </div>
    );
  }
}

export default App;
