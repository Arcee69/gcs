import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Logo from "../assets/png/logo.png"

const Header = () => {

    const navigate = useNavigate();

    const location  = useLocation()

  return (
    <div className={`${location.pathname === "/about" ? "gap-[184px]" : "justify-between"} w-full bg-[#fff] flex items-center fixed  px-8 py-5 `} > {/* pt-[39px] pb-[19px] */}
       <img src={Logo} alt='logo' className='w-48 cursor-pointer' onClick={() => {navigate("/"), window.scrollTo(0, 0)}}/>
        <div className='flex gap-[59px] items-center'>
            <ul className='flex gap-[50px] items-center list-none'>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => {navigate("/about"), window.scrollTo(0, 0)}}>About us</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => {navigate("/events"), window.scrollTo(0, 0)}}>Events</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => {navigate("/services"), window.scrollTo(0, 0)}}>Services</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => {navigate("/research"), window.scrollTo(0, 0)}}>Research</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => {navigate("/sustainability-assessment"), window.scrollTo(0, 0)}}>Sustainability Assessment</li>
            </ul>
            <button 
              type='button'
              className='border hover:bg-[#DF5216] hover:text-[#fff] border-[#DF5216] rounded-[22px] w-[113px] h-[45px] flex flex-col items-center justify-center p-2'
              onClick={() => navigate("/contact")}
            >
                Contact
            </button>
        </div>

    </div>
  )
}

export default Header