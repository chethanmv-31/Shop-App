import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {  Route, Routes } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact  path='/' element= {<Home/>}/>
        <Route exact path='/products' element= {<Products/>}/>
        <Route exact path='/product/:id' element= {<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
