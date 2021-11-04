import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

import Landing from './Landing'
import JesseDemo from './JesseDemo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/jessedemo' element={<JesseDemo />} exact />
        <Route path='/' element={<Landing />} exact />
      </Routes>
    </Router>
    // <Landing />
  )
}

export default App
