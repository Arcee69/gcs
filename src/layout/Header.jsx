import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className='w-full bg-[#fff] flex items-center gap-[381px] py-5  '> {/* pt-[39px] pb-[19px] */}
       <div></div>
        <div className='flex gap-[59px] items-center'>
            <ul className='flex gap-[50px] items-center list-none'>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => navigate("/about")}>About us</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => navigate("/events")}>Events</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => navigate("/services")}>Services</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => navigate("/research")}>Research</li>
                <li className='font-inter font-semibold cursor-pointer text-[15px] text-BLACK-_100' onClick={() => navigate("/sustainability-assessment")}>Sustainability Assessment</li>
            </ul>
            <button 
              type='button'
              className='border border-[#DF5216] rounded-[22px] w-[113px] h-[45px] flex flex-col items-center justify-center p-2'
              onClick={() => navigate("/contact")}
            >
                Contact
            </button>
        </div>

    </div>
  )
}

export default Header