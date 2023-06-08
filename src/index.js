import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {Provider } from 'react-redux';

const cart = (state = [], action) => {
    if(action.type ==="UPDATE_CART") {
        return [...state, action.payload]
    }
    return state;
};

const pizzaReducer = (state = [] , action) => {
    if (action.type === 'GET_PIZZA'){
        return action.payload
    }

    return state;
}

const orders = (state = [], action) => {
    if (action.type === 'SET_ORDER_LIST'){
        return action.payload
    }
    return state;
}

















const storeInstance = createStore(
    combineReducers({
        cart,
        pizzaReducer,
        orders
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
