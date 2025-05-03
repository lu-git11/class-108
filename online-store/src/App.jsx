import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Provider from './state/provider';


function App() {

  return (
    <Provider>
    <BrowserRouter>
      <Navbar></Navbar>  

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog></Catalog>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/admin' element={<Admin></Admin>} />
        <Route path='/cart' element={<Cart></Cart>} />
      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
    </Provider>
  )
}

export default App
