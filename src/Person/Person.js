import React, { Component } from 'react';
import PersonDetail from './PersonDetail';

const Person = (props) => {
    return (
        <>
            <tr key={props.id}>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td onClick={(e) => props.toggle(props)} className="cursorPointer"><span className="btn btn-primary btn-sm">View</span></td>
                <td><button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.id)}>Delete</button></td>
            </tr>
        </>
    )
}

export default Person;