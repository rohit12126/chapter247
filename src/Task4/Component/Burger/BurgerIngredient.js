import React from 'react';
import './Burger.css';

const BurgerIngredient = (props) => {
    let data;
    switch(props.type){
        case 'breadBottom':
            data = <div className={"bread-bottom"}>breadBottom</div>
            break;
        case 'cheese':
            data = <div className="cheese">cheese</div>
            break;
        case 'salad':
            data = <div className="salad">salad</div>
            break;            
        case 'peanut':
            data = <div className="peanut">peanut</div>
            break;
            case 'bacon':
            data = <div className="bacon">bacon</div>
            break;
        
        case 'breadTop':
            data = <div className="bread-top">BreadTop</div>
            break;
        default:
            data = null
    }
    return (
        data
    )
}

export default BurgerIngredient;