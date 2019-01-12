import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Assignment from './Assignment/Assignment';
import EmployeeList from './container/EmployeeList';
import PdfDemo from './PdfDemo';
import BurgerBuilder from './container/BurgerBuilder';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'AUTH'

ReactDOM.render(<EmployeeList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
