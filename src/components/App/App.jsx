import React from 'react';
import axios from 'axios';
import './App.css';
import Cart from '../Cart/cart.jsx';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        <Cart/> 
      <PizzaList />
  
    </div>
  );
}

export default App;
