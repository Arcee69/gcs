import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Assessment from '../pages/Assessment'
import Event from '../pages/Event'
import Research from '../pages/Research'
import GreenHydrogen from '../pages/Research/components/GreenHydrogen'
import Tech from '../pages/Research/components/Tech'
import Transport from '../pages/Research/components/Transport'
import Economy from '../pages/Research/components/Economy'
import Contact from '../pages/Contact'
import Ev from '../pages/Research/components/Ev'
import Biofuels from '../pages/Research/components/Biofuels'
import Maritime from '../pages/Research/components/Maritime'
import Mobility from '../pages/Research/components/Mobility'

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sustainability-assessment' element={<Assessment />} />
        <Route path='/events' element={<Event />} />
        <Route path='/research' element={<Research />} />
        <Route path='/research/green-hydrogen' element={<GreenHydrogen />} />
        <Route path='/research/tech' element={<Tech />} />
        <Route path='/research/transport' element={<Transport />} />
        <Route path='/research/economy' element={<Economy />} />
        <Route path='/research/ev' element={<Ev />} />
        <Route path='/research/biofuels' element={<Biofuels />} />
        <Route path='/research/maritime' element={<Maritime />} />
        <Route path='/research/mobility' element={<Mobility />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      
    </Routes>
  )
}

export default Routers
