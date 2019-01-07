import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {id: '34',name: 'SH', age:28},
        {id: 'hfg',name: 'dsf', age: 34}
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(arg, event) {
    const persons = [...this.state.persons];
    const a = persons.push({name:'jj'});
   
    console.log(a);
    this.setState({
      persons: [{ name:'fg', age:45 }]
    })

    console.log(this.state);
  }

  render() {
    console.log(this.state.persons);
    const persons = this.state.persons.map((person) => {
      return (<Person key={person.id} name={person.name} >Age: {person.age}</Person>)
    })
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.handleClick}>Clickdsfdsf</button>
        {persons}
      </div>
    );
  }
}

export default App;
