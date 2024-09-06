import { useState } from 'react'
import './App.css'
import { NavBar } from './components/all/NavBar';
import { Footer } from './components/all/Footer';
import { Given } from './components/all/Given';
import { MainSection } from './components/all/MainSection';
import { Catalog } from './components/catalog/Catalog';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
