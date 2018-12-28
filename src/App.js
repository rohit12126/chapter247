import React, { Component } from 'react';
import './App.css';
import Char from './Components/character/char';
import Validation from './Components/validation/validation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
    this.handleInputs = this.handleInputs.bind(this)
  }


  handleInputs(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputs} />
        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputs} />

        <br />

        <Validation name={this.state.name} type={'Name'} />
      </div>
    );
  }
}

export default App;
