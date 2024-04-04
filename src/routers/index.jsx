import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Assessment from '../pages/Assessment'
import Event from '../pages/Event'

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sustainability-assessment' element={<Assessment />} />
        <Route path='/events' element={<Event />} />
      </Route>
      
    </Routes>
  )
}

export default Routers
