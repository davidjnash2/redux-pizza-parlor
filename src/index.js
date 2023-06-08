import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {Provider } from 'react-redux';

const cart = (state = [], action) => {




    return state;

};


















const storeInstance = createStore(
    combineReducers({
        cart,


    }),
        applyMiddleware(logger)


);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store= {storeInstance}>
        <App />
    </Provider>
    </React.StrictMode>
);