import React,{ Component } from 'react';
import Layout from '../../Component/Layout';
import Burger from '../../Component/Burger';
import BuildControls from '../../Component/Burger/BuildControls';

class BurgerBulder extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : {
                cheese:0,
                salad:0,
                Peanut:0
            }
        }
    }
    handleAdd= (type)=>{
        const {ingredients} = this.state
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients});
    }
    handleRemove =(type)=>{
        const {ingredients} = this.state
        ingredients[type] = ingredients[type] ? ingredients[type] - 1 : ingredients[type]
        this.setState({ingredients});
    }
    render(){
        return(
            <>
                <Layout>
                    <div>Burger</div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls handleAdd ={this.handleAdd} handleRemove={this.handleRemove}/>
                </Layout>
            </>
        )
    }
}

export default BurgerBulder