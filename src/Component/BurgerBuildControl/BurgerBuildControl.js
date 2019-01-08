import React from 'react';

import './BurgerBuildControl.css';

const BurgerBuildControl = (props) => (
    <div className={'BuildControl'}>
        <div className={'Label'}>{props.label}</div>
        <button
            className={'Less'}
            onClick={props.handleRemove}
            disabled={props.disabled}>-</button>
        <button
            className={'More'}
            onClick={props.handleAdd}>+</button>
    </div>
);

export default BurgerBuildControl;