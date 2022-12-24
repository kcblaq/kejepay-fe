import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Router,Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Nav from "./pages/Nav"
import NotFound from "./pages/NotFound"
import { About } from './pages/About'
import { ComingSoon } from './pages/ComingSoon'
import Footer from './components/Footer'

function App() {
 
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);
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
 <Footer/>
 </>
  )
}

export default App
