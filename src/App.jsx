import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CandidateSearch from './pages/CandidateSearch'
import Navbar from './pages/Navbar'

export default function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/search' element={<CandidateSearch/>}/>
    </Routes>
    </div>

  )
}
