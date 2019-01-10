import React,{ Component } from 'react';
import Layout from './../../Component/Layout';
import Burger from '../../Component/Burger';
import BuildControls from './../../Component/Burger/BuildControls'
import Modal from './../../Component/UI/Modal'
import OrderSummary from './../../Component/Burger/OrderSummary'
const price={
    salad: 20.50,
    cheese: 10.60,
    peanut: 50.30,
    bacon: 30.10,}
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
               
        }
    }
    initiatePurchase = () => {
        this.setState({ showOrderModal: true })
    }

    cancelPurchase = () => {
        this.setState({ showOrderModal: false })
    }

    checkout = () => {
        alert('Order placed');
    }
    handleAdd= (type)=>{
        console.log(price)
        console.log(price[type])
        const {ingredients} = this.state;
        let totalPrice=this.state.totalPrice
        ingredients[type] = ingredients[type] + 1;
        totalPrice=totalPrice+price[type];
        this.setState({ingredients,totalPrice});
    }
    handleRemove =(type)=>{
        if (this.state.ingredients[type] < 1) {
            return;
        }
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients,
                    [type]: state.ingredients[type] - 1,
                },
                totalPrice: state.totalPrice - price[type]
            }
        });    }
    
    render(){
        
            return(
                <>
                    <Modal show={this.state.showOrderModal} modalClosed={this.cancelPurchase}>
                        <OrderSummary
                            ingredients={this.state.ingredients}
                            close={this.cancelPurchase}
                            checkout={this.checkout}
                            totalPrice={this.state.totalPrice}
                        />
                    </Modal>
                    <Layout>
                        <div>Burger</div>
                        <Burger ingredients={this.state.ingredients}/>
                        <BuildControls 
                        handleAdd ={this.handleAdd} 
                        handleRemove={this.handleRemove} 
                        totalPrice={this.state.totalPrice} 
                        purchaseable={(this.state.totalPrice > 0)}
                    handleClick={this.initiatePurchase}/>
                    </Layout>
                </>
        )
    }
}

export default BurgerBulder