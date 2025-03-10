import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/navigation'
import Home from './Components/Home'

import About from './Pages/About'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default App
