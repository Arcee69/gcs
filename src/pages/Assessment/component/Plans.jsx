import React from 'react'
import { useNavigate } from 'react-router-dom';
import Intro from "../../../assets/png/intro.png";
import Intro1 from "../../../assets/png/intro1.png";

import Plan from '../../../components/plans/Plan';
import { Dot, Stroke, Group2, Progress, Box3, Checked, Download } from '../../../assets/svg';

export default function Plans() {

    const navigate = useNavigate();

    return (
        <div className='plans flex flex-col pt-[74px] mt-[160px] gap-[66px]' style={{ overflowX: "hidden" }}>
            <p className='text-center text-[#fff] font-kumbh text-4xl lg:text-[45px]'>Discover Our Sustainability Assessment Tool </p>
            <div 
                className='flex w-[100%]  pr-[8.7%] px-5 lg:pl-[12.8%] '
            >
                <div className='hidden lg:flex md:w-[20%] lg:w-[40%] xl:w-[50%]'>
                    <div className='-left-56 mt-[12%] flex z-40 absolute h-[573px]'> {/* w-[572px] */}
                        <img src={Intro} alt='' className='w-full h-full object-contain brightness-50'/>
                    </div>
                    <div className='w-full xl:w-full lg:w-[90%] h-[600px] md:-left-[63%] lg:-left-[50%] xl:-left-36 mt-[2%]   md:absolute xl:relative   rounded-[30px]'>
                    <img src={Intro1}  alt='' className='w-full h-full  brightness-50'/>

                    </div>
                </div>
                <div className='flex-1  lg:w-[50%] '>
                    <div className='md:ml-[20%] lg:ml-[10%] xl:ml-8'>
                        <h1 className='text-[25px] xl:text-[35px] font-semibold text-white font-hanken'>Scope 1,2 and 3</h1>
                        <h2 className='text-xs xl:text-[15px] text-[#AEAEAE] font-Kumbh'>Understand your company’s sustainability
                        <br/>strategy and build a better lifestyle</h2>
                        <Plan />
                    </div>
                    <div className='mt-[42px] md:ml-[25%] lg:ml-[15%] xl:ml-0'>
                        <div className='flex gap-[15px]'>
                            <div className='hidden lg:flex items-center h-[52px]'>
                                <Dot />
                            </div>
                            <div>
                                <h1 className='md:text-[20px] xl:text-[25px] font-semibold font-hanken text-white'>Lifestyle-based factors</h1>
                                <h2 className='md:text-xs xl:text-[15px] text-[#AEAEAE] font-Kumbh'>Seek out Lifestyle-Based factors that employ 
                                <br />your real activity data as this will provide you
                                <br />with robust measurements</h2>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[60px] md:ml-[20%] lg:ml-[10%] xl:ml-8 flex'>
                        <div className='h-11 flex items-center hidden'>
                            <Stroke />
                        </div>
                        <div className=''>
                            <div className='absolute h-[84px] w-[323px]'>
                                <div className='h-full px-[30px] flex py-4'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div className='w-full flex justify-between'>
                                            <div className='flex gap-[9px]'>
                                                <Group2 />
                                                <p className='text-[20px] font-hanken text-[#C8C8C8]'>Your Progress</p>
                                            </div>
                                            <p className='text-[21px] text-[#C8C8C8] font-hanken'>70%</p>
                                        </div>
                                        <Progress />
                                    </div>
                                </div>
                            </div>
                            <Box3 />
                        </div>
                        <div className='self-end flex items-center -ml-[30px] mt-14'>
                            <div className='size-[51px] bg-[#45BC49] border-[#51C978] border-[3px] rounded-full flex justify-center items-center'>
                                <Checked />
                            </div>
                            <div className='size-[51px] bg-[#121212] border-[#202221] border-[3px] rounded-full flex justify-center items-center'>
                                <Download />
                            </div>
                        </div>
                    </div>
                    <div className='md:ml-[20%] lg:ml-[10%] xl:ml-8 mb-[71px]'>
                        <div className='mt-[30px]'>
                            <h1 className='text-[25px] font-semibold font-hanken text-white'>Personalised action plans</h1>
                            <h2 className='text-[13px] w-[386px] xl:hidden text-[#AEAEAE] font-Kumbh'>We can help you to develop a custom action plan that 
                            can help you tackle your Scope 1, Scope 2, and Scope 3 
                            emissions in the right way.</h2>
                            <h2 className='md:hidden xl:flex text-[15px] text-[#AEAEAE] font-Kumbh'>We can help you to develop a custom action plan that 
                            <br />can help you tackle your Scope 1, Scope 2, and Scope 3 
                            <br />emissions in the right way.</h2>
                        </div>
                        <div className='mt-[53px]'>
                            <button 
                                className='px-[27px] h-[55px] rounded-[27.5px] bg-white text-black text-[20px] font-hanken font-semibold'
                                onClick={() => {navigate("/sign-up"); window.scroll(0, 0)}}
                            >
                                Get a demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
