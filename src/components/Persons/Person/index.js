import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {
    return (<div className={classes.Person}>
        <p>Hi, My name is {props.name}</p>
        <input onChange={props.handleChange} value={props.name} />
        {props.children}
        </div>)
}

export default Person;