import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth0 from './components/auth0/Auth0'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Auth0/>}></Route>
        <Route path='/home/*' element={<Home/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
