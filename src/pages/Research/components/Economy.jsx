import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import EconomyImg from "../../../assets/png/building.png"

const Economy = () => {

    const loading = false

    const navigate = useNavigate()

    const submitForm = () => {

    }

  return (
    <div className='mt-32'>
        <div className='flex flex-col gap-4 px-5 lg:pl-[62px] lg:pr-0 animate__animated animate__fadeInUp'>
            <p className='text-[#000] font-inter font-semibold text-[34px] xl:text-[41px]'>Research</p>
            <p className='text-[20px] xl:text-[22px] text-[#000] font-inter w-[100%]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={EconomyImg} alt='Economy' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-5 lg:px-[77px] py-[93px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-3xl xl:text-[49px] lg:w-[670px] leading-[72px]'>Circular economy in infrastructure and buildings </p>
                <p className='font-inter text-[20px]'>
                    Throughout the whole lifecycle of construction and infrastructure projects, the circular economy is a sustainable strategy 
                    that attempts to maximise resource utilisation, minimise waste, and lessen environmental effect. With this approach, 
                    the old linear "take-make-dispose" model is transcended, and the concepts of reduce, reuse, recycle, and recover are 
                    embraced. Due to a decreased need for cement, steel, aluminium, plastic, and other building materials, a circular built 
                    environment might cut world carbon emissions from building materials by 38% in 2050.
                </p>
                <div className='flex flex-col'>
                    <p className='underline cursor-pointer' onClick={() => navigate("https://kpmg.com/uk/en/blogs/home/posts/2023/01/circular-economy-for-infrastructure.html#:~:text=A%20circular%20built%20environment%20could,aluminium%2C%20cement%2C%20and%20plastic.")}>
                        https://kpmg.com/uk/en/blogs/home/posts/2023/01/circular-economy-for-infrastructure.html#:~:text=A%20circular%20built%20environment%20could,aluminium%2C%20cement%2C%20and%20plastic.
                    </p>
                    <p className='underline cursor-pointer' onClick={() => navigate("https://ellenmacarthurfoundation.org/topics/built-environment/overview")}>
                        https://ellenmacarthurfoundation.org/topics/built-environment/overview
                    </p>
                </div>
               
            </div>

        </div>

        <div className='flex flex-col lg:flex-row items-start px-5 lg:px-0 lg:w-[1118px] lg:mx-auto gap-5 lg:gap-[134px] mt-[42px] xl:mt-[168px] mb-[108px]'>
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

export default Economy