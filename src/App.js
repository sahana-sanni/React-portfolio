import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Menu from './Screens/Menu'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Pnf from './Pages/Pnf'

function App() {
  return (
    <BrowserRouter>
       <Menu/>
       <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/projects`} element={<Projects/>} />
        <Route path={`/contact`} element={<Contact/>}/>
        <Route path={`/*`} element={<Pnf/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App