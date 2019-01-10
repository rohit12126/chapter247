import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

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

axios.interceptors.response.use(response=>{
    console.log('3333333333333333', response);
    return response;
}, error => {
    console.log('555555555555', error);
    return Promise.reject(error);
});

// axios.defaults.headers.common['Authorization'] = 'AUTH'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
