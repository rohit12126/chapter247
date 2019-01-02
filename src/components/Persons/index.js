import React, { PureComponent } from 'react';
import Person from './Person';

class Persons extends PureComponent {
    componentWillMount() {
        console.log('PersonsApp: componentWillMount')
    }
    componentDidMount() {
        console.log('Persons: componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('Persons: shouldComponentUpdate')
        return false;
    }
    componentWillUpdate() {
        console.log('Persons: componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('Persons: componentDidUpdate')
    }

    render() {
        return (
            this.props.persons.map((person) => {
                return <Person name={person.name} handleChange={this.props.handleChange}>{person.age}</Person>
            })
        )
    }
}

export default Persons;