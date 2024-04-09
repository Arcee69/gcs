import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Facebook from "../assets/svg/facebook.svg"
import Twitter from "../assets/svg/twitter.svg"
import X from "../assets/svg/twitter-x.svg"
import Instagram from "../assets/svg/instagram.svg"

const Footer = () => {
    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }

    const navigate = useNavigate()

  return (
    <div className='w-full bg-[#D9D9D9] flex flex-col lg:flex-row justify-between px-5 lg:pl-[102px] pt-[53px]  md:pr-[76px] pb-[29px]'>
        <div className='flex flex-col lg:flex-row gap-[77px]'>
            <div className='flex flex-col gap-[17px]'>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/green-hydrogen"); window.scrollTo(0, 0)}}>Green Hydrogen</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/tech"); window.scrollTo(0, 0)}}>AI tech for carbon reduction</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/transport"); window.scrollTo(0, 0)}}>Transport Circular Economy</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/economy"); window.scrollTo(0, 0)}}>CE in infrastructure and buildings</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/ev"); window.scrollTo(0, 0)}}>EV and decarbonisation</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/maritime"); window.scrollTo(0, 0)}}>Bio maritime decarbonisation</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/mobility"); window.scrollTo(0, 0)}}>Mobility and social impact</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]'>Active travel</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research/biofuels"); window.scrollTo(0, 0)}}>Biofuels</p>
            </div>
            <div className='flex flex-col gap-[17px]'>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/about"); window.scrollTo(0, 0)}}>About Us</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/research"); window.scrollTo(0, 0)}}>Research</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/events"); window.scrollTo(0, 0)}}>Event</p>
                <p className='text-[#5B5B5B] cursor-pointer hover:text-[#5A5A5A] hover:font-medium font-inter text-[15px]' onClick={() => {navigate("/contact"); window.scrollTo(0, 0)}}>Contact</p>
            </div>
        </div>

        <div className='flex flex-col mt-10 lg:mt-0'>
            <p className='font-inter text-[#565656] font-semibold text-[30px]'>Subscribe</p>
            <p className='font-inter text-xl text-[#616161]'>Sign up for newsletter</p>
            <input 
                type="text" 
                className='w-[330px] border-[#868686] border-t-0 border-x-0 bg-transparent border mt-[23px] outline-none p-2'
                placeholder='Email Address' 
                onChange={(e) => handleText(e)} 
            />
            <button
                type='button'
                className='w-[129px] text-center p-2 border text-lg font-inter text-[#4E4E4E] font-medium border-[#000] mt-[32px]'
            >
                Subscribe
            </button>
            <div className='flex items-center gap-[25px] mt-[44px]'>
                <img src={Facebook} alt='facebook' />
                <img src={Twitter} alt='twitter' />
                <img src={Instagram} alt='instagram' />
                <img src={X} alt='X' />
            </div>
            <p className='font-inter text-sm text-[#000] mt-[21px]'>inf@gce-sustainability.org</p>

        </div>
    </div>
  )
}

export default Footer