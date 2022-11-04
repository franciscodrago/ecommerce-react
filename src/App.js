import './App.css';
import { createContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/IntemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';

import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'






function App() {
  
  

  return (
    <div className="App">
       
  
<CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='/cart' element={ <Cart />}/> 
            <Route path='/checkout' element={ <Checkout />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
           
            
        </BrowserRouter>
       
        </CartProvider>
      
    </div>
  );
}

export default App;