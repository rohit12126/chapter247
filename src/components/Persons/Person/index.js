import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';

class Person extends Component {
    componentWillMount() {
        console.log('Person: componentWillMount')
    }
    componentDidMount() {
        console.log('Person: componentDidMount')
    }
    componentWillReceiveProps() {
        console.log('Person: componentWillReceiveProps')
    }
    shouldComponentUpdate() {
        console.log('Person: shouldComponentUpdate')
        return true;
    }
    componentWillUpdate() {
        console.log('Person: componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('Person: componentDidUpdate')
    }
    render() {
        return (
            <>
                <p>Hi, My name is {this.props.name}</p>
                <input onChange={this.props.handleChange} value={this.props.name} />
                {this.props.children}
            </>
        )
    }
}

export default withClass(Person, classes.Person);