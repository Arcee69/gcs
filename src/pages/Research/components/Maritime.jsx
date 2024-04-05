import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import Ship from "../../../assets/png/ship.png"

const Maritime = () => {

    const loading = false

    const navigate = useNavigate()

    const submitForm = () => {

    }

  return (
    <div className='mt-20'>
        <div className='flex flex-col gap-[4px] pl-[62px]'>
            <p className='text-[#000] font-inter font-semibold text-[59px]'>Research</p>
            <p className='text-[22px] text-[#000] font-inter w-[1074px]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={Ship} alt='ship' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-[77px] py-[93px] w-full flex flex-col'>
            <div className='flex flex-col gap-[98px]'>
                <p className='font-inter font-semibold text-[49px]'>Bio maritime decarbonisation  </p>
                <div className='flex flex-col gap-3 w-[1137px]'>
                    <p className='font-inter text-[20px]'>
                        Maritime decarbonization is a pressing worldwide need that aims to minimise carbon emissions from the maritime 
                        industry, which contributes significantly to climate change. Because of its critical role in global trade, the sector is 
                        under increasing pressure to reduce its environmental impact. Transitioning to cleaner fuels like LNG and hydrogen, 
                        investing in energy-efficient technologies, and implementing wind-assist and electric propulsion systems are among 
                        strategies for maritime decarbonization. The development of hybrid and completely electric ships, together with 
                        advancements in wind-assist technologies, promises an emission-free future for maritime transportation.
                    </p>
                    <p className='font-inter text-[20px]'>
                        Furthermore, carbon capture and storage (CCS) options have the potential to reduce emissions from existing vessels. 
                        International laws, such as those established by the International Maritime Organisation (IMO), are driving development
                        by defining sulphur content limitations in fuels and carbon intensity reduction targets. 
                        As the maritime industry attempts to sail towards a greener and more environmentally responsible future on the high 
                        seas, global collaboration, innovative technology solutions, and a commitment to sustainability are required.
                    </p>
                    <p 
                        className='underline cursor-pointer' 
                        onClick={() => navigate("https://www.energy.gov/eere/maritime-decarbonization#:~:text=Maritime%20decarbonization%20is%20the%20process,rise%20to%201.5%2Ddegrees%20Celsius.")}
                    >
                        https://www.energy.gov/eere/maritime-decarbonization#:~:text=Maritime%20decarbonization%20is%20the%20process,rise%20to%201.5%2Ddegrees%20Celsius.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex items-start w-[1118px] mx-auto gap-[134px] mt-[168px] mb-[108px]'>
        <div className='flex flex-col gap-[8px]'>
            <p className='font-inter font-semibold text-[44px]'>Become a member</p>
            <p className='text-[#19373E] text-[24px] font-inter font-medium'>Join our growing community</p>
        </div>
        <div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    workEmail: "",
                    country: ""
                }}
                // validationSchema={formValidationSchema}
                    onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")
                    submitForm(values, action);
                }}
            >
            {({
                handleSubmit,
                handleChange,
                dirty,
                isValid,
                setFieldValue,
                errors,
                touched,
                // setFieldTouched,
                values,
            }) => (
                <Form onSubmit={handleSubmit} className="flex ">
                    <div className="flex flex-col gap-[21px]">
                        
                        <div className='flex items-center gap-[35px]'>
                            <div className='flex flex-col gap-2 w-[276px]'>
                            <input 
                                name="firstName"
                                placeholder="First Name"
                                type='text'
                                onChange={handleChange}
                                className='w-[276px] h-[58px] border border-[#8F8F8F] p-2.5'
                            />
                            </div>
                            <div className='flex flex-col gap-2 w-[276px]'>
                            <input 
                                name="lastName"
                                placeholder="Last Name"
                                type='text'
                                onChange={handleChange}
                                className='w-[276px] h-[58px] border border-[#8F8F8F] p-2.5'
                            />
                            </div>

                        </div>

                        <div className='w-[587px] flex flex-col gap-2'>
                            <input 
                            name="companyName"
                            placeholder="Company Name"
                            type='text'
                            onChange={handleChange}
                            className='w-[587px] h-[58px] border border-[#8F8F8F] p-2.5'
                            />
                        </div>

                        <div className='w-[587px] flex flex-col gap-2'>
                            <input 
                            name="workEmail"
                            placeholder="Work Email"
                            type='text'
                            onChange={handleChange}
                            className='w-[587px] h-[58px] border border-[#8F8F8F] p-2.5'
                            />
                        </div>

                        <div className='w-[587px] flex flex-col gap-2'>
                            <input 
                            name="country"
                            placeholder="Country"
                            type='text'
                            onChange={handleChange}
                            className='w-[587px] h-[58px] border border-[#8F8F8F] p-2.5'
                            />
                        </div>

                        <button
                            className="w-[129px] font-inter flex items-center justify-center mt-[26px] h-[46px] bg-[#000] text-lg rounded text-center"
                            type="submit"
                            disabled={loading}
                        >
                            <p className='text-WHITE-_100 text-sm font-semibold'>{loading ? <CgSpinner className=" animate-spin text-xl " /> : 'Submit'}</p>
                            
                        </button>
                    </div>

                </Form>
            )}

            </Formik>
        </div>
        </div>
    </div>
  )
}

export default Maritime