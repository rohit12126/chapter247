import React, { Component } from 'react';
import Persons from './Persons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {id: '34',name: 'SH', age:28},
        {id: 'hfg',name: 'dsf', age: 34}
      ],
      show: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentWillMount () {

    
  }

  handleChange(id, e) {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = e.target.value;
    persons.splice(personIndex, 1, person);
    this.setState({ persons: persons });
  }

  toggle() {
    const current = this.state.show;
    this.setState({ show: !current });
  }

  render() {
    let persons = null;
    const btnStyle = {
      backgroundColor: 'white'
    }
    let btnClass = '';
    if(this.state.show) {
      return (<Persons persons={this.state.persons} handleChange={this.handleChange} >Age: {person.age}</Persons>)
      btnClass = 'red-btn';
    }
    
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button className={btnClass} onClick={this.toggle}>Click</button>
        {persons}
      </div>
    );
  }
}

export default App;
