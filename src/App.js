import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {  Route, Routes } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Profile from './Components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact  path='/' element= {<Home/>}/>
        <Route exact path='/products/:category' element= {<Products/>}/>
        <Route exact path='/product/:id' element= {<Product/>}/>
        <Route exact path='/profile' element= {<Profile/>}/>

      </Routes>
    </>
  );
}

export default App;
