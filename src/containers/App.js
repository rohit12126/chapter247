import React, { Component } from 'react';
import Persons from '../components/Persons';
import './App.css';
import withClass from '../hoc/withClass';
import {AuthContext} from '../context';
import Posts from './Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {id: '34',name: 'SH', age:28},
        {id: 'hfg',name: 'dsf', age: 34}
      ],
      show: false,
      counter: 0,
      authenticated: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleCounter = this.handleCounter.bind(this)
    this.login = this.login.bind(this)
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
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('App: getDerivedStateFromProps')
  }
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('App: getSnapshotBeforeUpdate')
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

  handleCounter() {
    this.setState((state) => { return { counter: state.counter + 1 } })
  }

  login() {
    this.setState({ authenticated: true });
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
        <p>{this.state.counter}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.handleCounter}>Counter</button>
        <button className={btnClass} onClick={this.toggle}>Click</button>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        <Posts />
      </>
    );
  }
}

export default withClass(App, 'App');
