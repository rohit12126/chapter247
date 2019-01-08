import React, {Component} from 'react';
import Burger from '../../component/Burger/index'

const INGREDIENT_RATES = {
    salad: 20.50,
    cheese: 10.60,
    meat: 50.30,
    bacon: 30.10,
  }

class BurgerBuilder extends Component {

    constructor(){
        super();
            this.state = {
                ingredients: {
                    cheese: 0,
                    bacon: 0,
                    meat: 0,
                    salad: 0
                },
            totalPrice: 0,
        }
    }

    render() {
        return(
            <>
                <Burger/>
            </>
        )
    }

}

export default BurgerBuilder;