import React, { Component } from 'react';
import './App.css';
import Layout from './component/Layout/index'
import BurgerBuilder from './container/BurgerBuilder/index'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  render(){
    return (
      <div>
        <Layout>
          <BurgerBuilder>
          </BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;