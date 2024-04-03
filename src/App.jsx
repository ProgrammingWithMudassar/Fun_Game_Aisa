import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages/index.js'
import RoutesProtection from './utils/RoutesProtection.jsx'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<RoutesProtection />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
