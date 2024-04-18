import React from 'react'
import Logo from "../assets/png/logo_mobile.png"
import Close from "../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute pl-[29px] pr-[13px] py-[32px] right-0 top-0">
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[100px] h-[25px]' onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <ul class="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <li onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Home</li>
                <li onClick={() => {navigate("/about"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">About us</li>
                <li onClick={() => {navigate("/events"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px] text-[#00141B]">Event</li>
                <li onClick={() => {navigate("/services"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Services</li>
                <li onClick={() => {navigate("/research"); window.scrollTo(0,0); handleClose()}} className="font-mont  cursor-pointer font-semibold text-[17px]  text-[#00141B]">Research</li>
                <li onClick={() => {navigate("/sustainability-assessment"); window.scrollTo(0,0); handleClose()}} className="font-mont cursor-pointer font-semibold text-[17px]  text-[#00141B]">Sustainability Assessment</li>
            </ul>
            <div className=" flex flex-col gap-4 mt-[42px]">
                <button cursor-pointer 
                    onClick={() => {navigate("/contact"); window.scrollTo(0,0); handleClose()}} 
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