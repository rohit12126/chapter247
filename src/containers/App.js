import React, { Component } from 'react';
import Persons from '../components/Persons';
import './App.css';
import withClass from '../hoc/withClass';

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
    console.log('App: componentWillMount')
  }
  componentDidMount () {
    console.log('App: componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('App: shouldComponentUpdate')
    return true;
  }
  componentWillUpdate () {
    console.log('App: componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('App: componentDidUpdate')
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
    this.setState({ show: true });
  }

  render() {
    console.log('App: render')
    let persons = null;
    const btnStyle = {
      backgroundColor: 'white'
    }
    let btnClass = '';
    if(this.state.show) {
      btnClass = 'red-btn';
      persons = <Persons persons={this.state.persons} handleChange={this.handleChange} />
    }
    
    return (
      <>
        <h1>Hello World</h1>
        <button className={btnClass} onClick={this.toggle}>Click</button>
        {persons}
      </>
    );
  }
}

export default withClass(App, 'App');
