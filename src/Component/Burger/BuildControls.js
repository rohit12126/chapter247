import React from 'react';
import './../BurgerBuildControl/BurgerBuildControl.css';
import BurgerBuildControl from './../BurgerBuildControl/BurgerBuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={"BuildControls"}>
        {controls.map(element => (
            <BurgerBuildControl
                key={element.label}
                label={element.label}
                handleAdd={() => props.handleAdd(element.type)}
                handleRemove={() => props.handleRemove(element.type)}
            />
        ))}
    </div>
)

export default BuildControls;
