import React, { Component } from 'react';
import './App.css';
import Char from './Components/character/char';
import Validation from './Components/validation/validation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      addValue: ''
    }
    this.handleInputs = this.handleInputs.bind(this);
  }


  handleInputs(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputs} />

        <br />

        <Validation name={this.state.name} type={'Name'} />

        <br />

        <Char name={this.state.name} />
      </div>
    );
  }
}

export default App;
