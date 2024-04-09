import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import People from "../../../assets/png/mobility.png"

const Mobility = () => {

    
    const loading = false

    const navigate = useNavigate()

    const submitForm = () => {

    }

  return (
    <div className='mt-32'>
        <div className='flex flex-col gap-4 px-5 lg:pl-[62px] lg:pr-0'>
            <p className='text-[#000] font-inter font-semibold text-4xl lg:text-[59px]'>Research</p>
            <p className='text-[20px] lg:text-[22px] text-[#000] font-inter w-[100%]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={People} alt='people' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-5 lg:px-[77px] pt-[119px] pb-[267px] w-full flex flex-col'>
            <div className='flex flex-col gap-[49px]'>
                <p className='font-inter font-semibold text-3xl lg:text-[49px]'>Mobility and Social Impact</p>
                <div className='flex flex-col gap-3 '>
                    <p className='font-inter text-[20px]'>
                        Mobility has a significant social impact on sustainability, affecting many elements of our lives and societies. Sustainable 
                        mobility works to mitigate these effects. To begin with, sustainable mobility minimises air pollution, which improves public 
                        health. Cleaner and more efficient modes of transportation, such as electric automobiles and public transportation, 
                        reduce pollutants, resulting in fewer respiratory ailments and an improved quality of life.
                    </p>
                    <p className='font-inter text-[20px]'>
                        Second, long-term mobility promotes social justice. Its goal is to make transportation accessible, economical, and efficient 
                        for everyone, regardless of income, age, or physical ability. This has the potential to minimise transit inequities while also 
                        improving access to key services, education, and job opportunities. Sustainable mobility can improve urban liveability. 
                        Cities can reduce traffic congestion, noise pollution, and the demand for large parking lots by prioritising non-motorized 
                        transportation such as walking and cycling, making urban places more pleasant for people.
                    </p>
                    <p 
                        className='font-inter text-[20px]' 
                    >
                        Furthermore, sustainable mobility has the potential to boost local economies. Investments in public transportation and active 
                        transportation infrastructure can create jobs and increase economic activity, while reducing automobile dependency can 
                        reduce household debt. Finally, sustainable mobility has a wide-ranging societal impact, ranging from improved public health 
                        and social fairness to increased urban liveability and economic support. Its inclusion in urban planning and transport strategies 
                        is critical for developing more sustainable and inclusive societies.
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row items-start px-5 lg:px-0 lg:w-[1118px] lg:mx-auto gap-5 lg:gap-[134px] mt-[168px] mb-[108px]'>
            <div className='flex flex-col gap-[8px]'>
                <p className='font-inter font-semibold text-3xl lg:text-[44px]'>Become a member</p>
                <p className='text-[#19373E] text-xl lg:text-[24px] font-inter font-medium'>Join our growing community</p>
            </div>
            <div className='w-full  lg:mt-0 lg:w-auto'>
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
                    <Form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-col gap-[21px]">
                            
                            <div className='flex flex-col lg:flex-row items-center gap-[35px]'>
                                <div className='flex flex-col gap-2 w-full lg:w-[276px]'>
                                <input 
                                    name="firstName"
                                    placeholder="First Name"
                                    type='text'
                                    onChange={handleChange}
                                    className='w-full lg:w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                                />
                                </div>
                                <div className='flex flex-col gap-2 w-full lg:w-[276px]'>
                                <input 
                                    name="lastName"
                                    placeholder="Last Name"
                                    type='text'
                                    onChange={handleChange}
                                    className='w-full lg:w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                                />
                                </div>

                            </div>

                            <div className='w-full lg:w-[587px] flex flex-col gap-2'>
                                <input 
                                name="companyName"
                                placeholder="Company Name"
                                type='text'
                                onChange={handleChange}
                                className='w-full lg:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-full lg:w-[587px] flex flex-col gap-2'>
                                <input 
                                name="workEmail"
                                placeholder="Work Email"
                                type='text'
                                onChange={handleChange}
                                className='w-full lg:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-full lg:w-[587px] flex flex-col gap-2'>
                                <input 
                                name="country"
                                placeholder="Country"
                                type='text'
                                onChange={handleChange}
                                className='w-full lg:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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

export default Mobility