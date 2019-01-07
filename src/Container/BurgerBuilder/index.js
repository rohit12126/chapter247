import React,{ Component } from 'react';
import Layout from '../../Component/Layout';
import Burger from '../../Component/Burger';

class BurgerBulder extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : {
                cheese:2,
                salad:1,
                Peanut:3
            }
        }
    }
    render(){
        Object.keys(this.state.ingredients).map((element) => {
            console.log(element);
        })
        return(
            <>
                <Layout>
                    <div>Burger</div>
                    <Burger ingredients={this.state.ingredients}/>
                </Layout>
            </>
        )
    }
}

export default BurgerBulder