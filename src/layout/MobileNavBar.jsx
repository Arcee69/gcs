import React from 'react'
import Logo from "../assets/png/logo.png"
import Close from "../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[113px] h-[45px]' onClick={() => {navigate("/"); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <ul class="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <li onClick={() => {navigate("/about us"); handleClose()}} className="font-mont font-semibold text-[17px]  text-[#00141B]">About us</li>
                <li onClick={() => {navigate("/event"); handleClose()}} className="font-mont font-semibold text-[17px] text-[#00141B]">Event</li>
                <li onClick={() => {navigate("/services"); handleClose()}} className="font-mont font-semibold text-[17px]  text-[#00141B]">Services</li>
                <li onClick={() => {navigate("/research"); handleClose()}} className="font-mont font-semibold text-[17px]  text-[#00141B]">Research</li>
                <li onClick={() => {navigate("/sustainability-assessment"); handleClose()}} className="font-mont font-semibold text-[17px]  text-[#00141B]">Sustainability Assessment</li>
            </ul>
            <div className=" flex flex-col gap-4 mt-[156px]">
                <button
                    onClick={() => {navigate("/contact"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] bg-[#fff] font-mont border border-[#00141B] text-[16px] font-semibold"
                >
                    Contact
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar