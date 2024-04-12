import React from 'react'
import { Stroke, Box, Box2, Stroke2, Group } from '../../assets/svg'

export default function Plan() {
    return (
        <div className='flex items-center mt-[38px]'>
            <Stroke />
            <div className=''>
                <div className='absolute h-[51px] w-[239px]'>
                    <div className='px-[38px] h-full flex items-center gap-[25px]'>
                        <div className='flex gap-[7.62px] items-center'>
                            <Group />
                            <p className='text-[15px] font-semibold font-hanken text-[#C8C8C8]'>Users</p>
                        </div>
                        <p className='text-[#B8B8B8] text-[15px] font-hanken'>2/30</p>
                    </div>
                </div>
       
                <Box />
           
            </div>
            <div className='hidden md:block'>
                <Stroke2 />
            </div>
            <div className='hidden md:block'>
                <div className='absolute h-[51px] w-[239px]'>
                    <div className='px-[38px] h-full flex items-center gap-[25px]'>
                        <div className='flex gap-[7.62px] items-center'>
                            <Group />
                            <p className='text-[15px] font-semibold font-hanken text-[#C8C8C8]'>Survey</p>
                        </div>
                        <p className='text-[#B8B8B8] text-[15px] font-hanken'>2/30</p>
                    </div>
                </div>
                <Box2 />
            </div>
        </div>
    )
}
