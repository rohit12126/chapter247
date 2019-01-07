import React,{ Component } from 'react';
import Layout from './../../Component/Layout';
import Burger from '../../Component/Burger';

class BurgerBulder extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : {
                cheese:2,
                salad:1,
                Peanut:3,
                keys:[]
            }
        }
    }
    componentDidMount(){
        console.log(Object.values(this.state.ingredients) )
        
        
       
    }
    render(){
        var temp=this.state.keys;
        //    this.state.keys.map =(value)=>{
        //         var value=value;
        //         console.log("value")
        //     }
        // console.log (Object.values(this.state.ingredients));
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