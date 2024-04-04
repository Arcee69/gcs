import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
        <div>
            <Header />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout