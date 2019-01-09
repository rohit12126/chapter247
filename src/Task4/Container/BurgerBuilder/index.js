import React,{ Component } from 'react';
import Layout from './../../Component/Layout';
import Burger from '../../Component/Burger';
import BuildControls from './../../Component/Burger/BuildControls'
const price={
    cheese:0,type:"cheese",
    salad:0,type:"salad",
    peanut:0,type:"peanut",
    bacon:0,type:"bacon"
}
class BurgerBulder extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : {
                cheese:0,
                salad:0,
                peanut:0,
                bacon:0,
               },
               keys:[],
               disabel:false,
               totalPrice:0,
               price:{
                   cheese:0,
                   salad:0,
                   peanut:0,
                   bacon:0
               }
           
        }
    }
    handleAdd= (type)=>{
        const {ingredients} = this.state
        let totalPrice=this.state.totalPrice;
        ingredients[type] = ingredients[type] + 1;
        totalPrice=totalPrice+10;
        this.setState({ingredients,totalPrice});
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
                    <BuildControls handleAdd ={this.handleAdd} handleRemove={this.handleRemove} totalPrice={this.state.totalPrice} disabel={this.state.disabel}/>
       
                </Layout>
            </>
        )
    }
}

export default BurgerBulder