import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Task4/Component/Dashboard/Dashboard.css'
import EmployeeList from './Task4/Container/EmployeeList';
import BurgerBuilder from './Task4/Container/BurgerBuilder'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BurgerBuilder/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
