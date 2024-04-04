import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-[#fff] flex items-center justify-between py-5  px-5'> {/* pt-[39px] pb-[19px] */}
       <div></div>
        <div className='flex gap-[59px] items-center'>
            <ul className='flex gap-[50px] items-center list-none'>
                <li className='font-inter font-semibold text-[15px] text-BLACK-_100'>About us</li>
                <li className='font-inter font-semibold text-[15px] text-BLACK-_100'>Events</li>
                <li className='font-inter font-semibold text-[15px] text-BLACK-_100'>Services</li>
                <li className='font-inter font-semibold text-[15px] text-BLACK-_100'>Research</li>
                <li className='font-inter font-semibold text-[15px] text-BLACK-_100'>Sustainability Assessment</li>
            </ul>
            <button className='border border-[#DF5216] rounded-[22px] w-[113px] h-[45px] flex flex-col items-center justify-center p-2'>
                Contact
            </button>
        </div>

    </div>
  )
}

export default Header