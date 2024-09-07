import { useState } from 'react'
import './App.css'
import { NavBar } from './components/all/NavBar';
import { Footer } from './components/all/Footer';
import { Catalog } from './components/catalog/Catalog';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';
import { Checkout } from './components/checkout/Checkout';
import { Contact } from './components/contact/Contact';
import { Cart } from './components/cart/Cart';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
