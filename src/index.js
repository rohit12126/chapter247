import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

// axios.interceptors.request.use(request => {
//     headers = {
//         Authorization:
//         "Client-ID c94079fa3fdda6ffb6ccee0720b80531ef1329d73bbcea2a44e2622b24c46dec"
//     };
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
