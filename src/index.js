import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Task4/Component/Dashboard/Dashboard.css'
import EmployeeList from './Task4/Container/EmployeeList';
import BurgerBuilder from './Task4/Container/BurgerBuilder'
import Person  from './Task4/Container/person'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Rangeslider from './Task4/Container/Randeslider'
import AutoSuggest from './Task4/AutoSuggest'
import SideBar from './Task4/Component/Sidebar/Sidebar'

axios.interceptors.request.use(request=>{
    console.log('3333333333333333', request);
    request.headers = {
        'Autorization': 'AUTH'
    };
    return request;
}, error => {
    console.log('4444444444444');
    return Promise.reject(error);
});
// axios.defaults.headers.common['Authorization'] = 'AUTH'
// ReactDOM.render( <BrowserRouter>
//      <Person />
//     </BrowserRouter>
//     , document.getElementById('root'));

ReactDOM.render( <BrowserRouter ><EmployeeList /></BrowserRouter>
   ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
