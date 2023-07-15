import './App.css'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Content from './components/Content.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <div className="routes">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
