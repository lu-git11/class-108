import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import About from './Pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {

  return (
    <>
      <Navbar></Navbar>   
      <Home />
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </>
    
  )
}

export default App
