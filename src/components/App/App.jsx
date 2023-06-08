import React from 'react';
import axios from 'axios';
import './App.css';
import Cart from '../Cart/cart.jsx';
import PizzaList from '../PizzaList/PizzaList';
import {HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

    <Router>
      <Route exact path="/cart">
          <Cart/> 
      </Route>
      <Route exact path="/">
          <PizzaList />
      </Route>
      <Route exact path="/admin">
        <p>placeholder</p>
      </Route>
      <Route exact path="/checkout">
        <p>placeholder</p>
      </Route>
    </Router> 
    </div>
  );
}

export default App;
