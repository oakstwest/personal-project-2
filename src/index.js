import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { injectGlobal } from 'styled-components';




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
unregister();

injectGlobal`
  body {
    background: url(https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-attachment:fixed;
    background-color: #cccccc;
    min-height: 100vh;
    height:auto;
    position:absolute;
    width: auto ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: relative;
    padding:0;
    margin: 0;
    font-family:sans;
  }`

