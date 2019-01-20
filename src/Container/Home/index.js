import React, { Component } from 'react';
import axios from 'axios';
import Productlist from './../../component/ProductList';
import Gallery from './../../component/Gallery';
import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            gallery:false
        }

    }
    componentDidMount()
    {
        axios.get('http://flowhaus.com/flowhaus/api/home/?auth=ExpediaFlow')
        .then(response=>(
            this.setState({
                products:response.data.favorite_incredible_places
            })
        )).catch(error=>(
            console.log(error)
        ));
    }
    handleClick = () => {
        console.log('handleClick');
        this.setState({
            gallery:true
        })
    }
    render() {
        const productList = this.state.products.map(product => {
            return(
                <>
                <Productlist 
                    product={product} 
                    key={product.incredible_id}
                    handleClick={this.handleClick}
                />
                {this.state.gallery ? <Gallery product={product} /> : null}
                </>
            )
        })
        return (
            <>
                <div className="row text-center text-lg-left">
                    {productList}
                </div>
            </>
        )
    }
}
export default Home;