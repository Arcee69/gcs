import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MiniHeader from './MiniHeader'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className='w-full relative fixed z-50 hidden xl:block'>
            <Header />
        </div>
        <div className='flex xl:hidden' >
          <MiniHeader />
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