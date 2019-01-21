import React ,{Component}from 'react';
import './../BurgerBuildControl/BurgerBuildControl.css';
import BurgerBuildControl from './../BurgerBuildControl/BurgerBuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Peanut', type: 'peanut' },
];

const BuildControls =(props)=>{   
        return(
    <div className={"BuildControls"}>   
       <div><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></div>
        {controls.map(element => (
            <BurgerBuildControl
                key={element.label}
                label={element.label}
                handleAdd={() => props.handleAdd(element.type)}
                handleRemove={() => props.handleRemove(element.type)}
            />
        ))}
         <button className='OrderButton' disabled={!props.purchaseable} onClick={props.handleClick}>
                Order Now!
            </button>
    </div>
    )
}



export default BuildControls;
