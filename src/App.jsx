import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import {BrowserRouter, Router,Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Nav from "./pages/Nav"
import NotFound from "./pages/NotFound"
import { About } from './pages/About'
import { ComingSoon } from './pages/ComingSoon'

function App() {
 

  return (
    <>
  <Nav />
 <Routes>
  <Route path="/" element={ <Home/>} />
  <Route path="/dashboard" element={ <Dashboard/>} />
  <Route path="/about" element={< About />} />
  <Route path="/soon" element={ <ComingSoon /> } />
  <Route path="*" element={<NotFound />} />

 </Routes>
 </>
  )
}

export default App
