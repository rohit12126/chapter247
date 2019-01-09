import React ,{Component}from 'react';
import './../BurgerBuildControl/BurgerBuildControl.css';
import BurgerBuildControl from './../BurgerBuildControl/BurgerBuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Peanut', type: 'peanut' },
];

class BuildControls extends Component {
    render(){
        console.log(this.props.totalPrice)
        return(
    <div className={"BuildControls"}>
        {controls.map(element => (
            <BurgerBuildControl
                key={element.label}
                label={element.label}
                handleAdd={() => this.props.handleAdd(element.type)}
                handleRemove={() => this.props.handleRemove(element.type)}
                totalPrice={this.props.totalPrice}
            />
        ))}
    </div>
    )
}
}

export default BuildControls;
