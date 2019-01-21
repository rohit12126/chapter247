import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//mport BurgerBuilder from './Container/BurgerBuilder';
// import EmployeeList from './Container/EmployeeList'
import * as serviceWorker from './serviceWorker';
import SideBar from './Component/Sidebar/Sidebar'
import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render( <BrowserRouter><Route path="/home" component={SideBar} /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
