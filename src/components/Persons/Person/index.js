import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../context';

class Person extends Component {
    static contextType = AuthContext;
    constructor() {
        super();
        this.inputElement = React.createRef()
        this.focus = this.focus.bind(this);
    }
    componentWillMount() {
        console.log('Person: componentWillMount')
    }
    componentDidMount = () => {
        // if (this.props.position === 0)
        //     this.inputElement.current.focus();
    }
    focus() {
        this.inputElement.current.focus();
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
        console.log('..........', this.context);
        return (
            <>
                {/* <AuthContext.Consumer>
                    {auth => auth ? <p>Authenticated</p> : null}
                </AuthContext.Consumer> */}
                { this.context ? <p>Authenticated</p> : null}
                <p>Hi, My name is {this.props.name}</p>
                <input ref={this.inputElement} onChange={(e) => this.props.handleChange(this.props.id, e)} value={this.props.name} />
                {this.props.children}
            </>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    handleChange: PropTypes.func,
}

export default withClass(Person, classes.Person);