import React, { useState } from 'react'

import Hamburger from "../assets/png/hamburger.png"
import Logo from "../assets/png/logo.png"
import MobileNavBar from './MobileNavBar'

const MiniHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full fixed z-10'>
        <div  className='w-full mx-auto  h-[58px] bg-[#FFF] py-[16px] px-[14px]  flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[113px] h-[45px]' />
            <img src={Hamburger} alt='logo'  className='w-[21px] h-[16px]' onClick={() => setOpen(true)}/>
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader