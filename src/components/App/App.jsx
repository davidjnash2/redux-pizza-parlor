import React from 'react';
import axios from 'axios';
import './App.css';
import Cart from '../Cart/cart.jsx';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        <Cart/> 
  
    </div>
  );
}

export default App;
