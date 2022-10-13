import './App.css';
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/IntemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  // const [page, setPage] = useState({ path: 'list', param: ''})

  return (
    <div className="App">
       
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
           
            
        </BrowserRouter>
    </div>
  );
}

export default App;