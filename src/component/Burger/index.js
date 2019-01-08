import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import './Burger.css';

const Burger = (props) => {

    let burgerFilling = 'Cheeseeeeeee'

    return(
        <div className="Burger">
            <BurgerIngredient type='bread-top' />
                {burgerFilling}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger