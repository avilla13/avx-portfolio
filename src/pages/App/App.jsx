import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import Contact from '../../components/Contact/Contact';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

