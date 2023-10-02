import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Projects from '../Projects/Projects';
import NavBar from '../../components/NavBar/NavBar';
import Contact from '../../components/Contact/Contact';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

