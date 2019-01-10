import React, {Component} from 'react';

import './BurgerBuildControl.css';

class BurgerBuildControl extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.totalPrice)
        return(
    <div className={'BuildControl'}>
     
        <div className={'Label'}>{this.props.label}</div>
       
        <button
            className={'Less'}
            onClick={this.props.handleRemove}
            disabled={this.props.disabled}>-</button>
        <button
            className={'More'}
            onClick={this.props.handleAdd}>+
        </button>
        
            
    </div>
    )
}
}

export default BurgerBuildControl;