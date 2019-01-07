import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredient'
import PropTypes from 'prop-types';

class Burger extends Component {
    render(){
        console.log(this.props.ingredients);
        return(
            <>
                <BurgerIngredients type="breadTop"/>
                <BurgerIngredients type="cheese"/>
                <BurgerIngredients type="salad"/>
                <BurgerIngredients type="breadBottom"/>
            </>
        )
    }
}

Burger.propTypes = {
    ingredients: PropTypes.object
};

export default Burger;