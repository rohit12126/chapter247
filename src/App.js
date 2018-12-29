import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Validation from './Validation/validation';
import Char from './Char/char';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  handleChange(e){
    this.setState ({
        [e.target.name]: e.target.value
    })
  }

  changeInput(index) {
    let n = this.state.name;
    n = n.split('');
    n.splice(index, 1);
    this.setState({ name: n.join('')});
  }

  render(){
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} /> 
        <br />
        <Validation name={this.state.name} type={'Name'} />
        <Char removeFromInput={this.changeInput}  name={this.state.name} type={'Name'}  ></Char>
      </div>
    );
  }
}

export default App;
