import { useState } from 'react'
import './App.css'
import { NavBar } from './components/all/NavBar';
import { Footer } from './components/all/Footer';
import { Catalog } from './components/catalog/Catalog';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Details } from './components/details/Details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
