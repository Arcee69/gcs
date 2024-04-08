import React from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'

import Banner from "../../assets/png/event.png"

const Event = () => {

    const loading = false

    const submitForm = () => {

    }

  return (
    <div className='mt-32 w-full'>
        <div className='flex flex-col gap-[55px] pl-[95px]'>
            <p className='text-[#DF632D] font-inter font-semibold text-[41px]'>Events</p>
            <div className='flex items-center justify-between px-[69px] w-[90%] h-[487px] bg-[#F6FFF2]'> {/* 1109px */}
                <div className='flex flex-col gap-[13px]'>
                    <p className='w-[236px] font-medium font-inter text-[23px] text-[#000]'>The Grand Launch by Andy Street CBE</p>
                    <p className='w-[296px] font-bold font-inter text-[19px] text-[#000]'>Rt Hon. Mayor of West Midlands</p>
                    <p className='w-[336px] font-bold font-inter text-[19px] text-[#000]'>
                        The Global Centre of Excellence in Sustainability & Ciruclar Economy
                        and social value in Transport
                    </p>
                </div>
                <img src={Banner} alt='Event Banner' className='w-[55%]'/>
            </div>
        </div>
        <div className='flex items-center justify-center mt-[165px] flex-col'>
            <p className='w-[736px] text-center font-medium font-inter text-[67px] leading-[82px]'>
                Let’s Collaborate in building a better future
            </p>
            <div className='mt-[100px] mb-[385px]'>
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
                            <p className='text-[#19373E] font-inter font-medium text-[24px] text-center'>Join our growing community</p>
                            
                            <div className='flex items-center gap-[35px]'>
                                <div className='flex flex-col gap-2 w-[276px]'>
                                <input 
                                    name="firstName"
                                    placeholder="First Name"
                                    type='text'
                                    onChange={handleChange}
                                    className='w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                                />
                                </div>
                                <div className='flex flex-col gap-2 w-[276px]'>
                                <input 
                                    name="lastName"
                                    placeholder="Last Name"
                                    type='text'
                                    onChange={handleChange}
                                    className='w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                                />
                                </div>

                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="companyName"
                                placeholder="Company Name"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="workEmail"
                                placeholder="Work Email"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="country"
                                placeholder="Country"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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

export default Event