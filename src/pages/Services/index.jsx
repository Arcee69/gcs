import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'

import ServicesImg from "../../assets/png/services.png"

const Services = () => {

    const loading = false

    const ServicesItems = [
        {
          title: "Research and Insights​",
          subtitle: "Conduct comprehensive research on sustainability trends, challenges, and best practices to inform decision-making. "
        },
        {
          title: "Capacity Building",
          subtitle: "Develop workshops, training, and certification programs to empower professionals with sustainable skills."
        },
        {
          title: "Consultancy​",
          subtitle: "Develop workshops, training, and certification programs to empower professionals with sustainable skills."
        },
        {
          title: "Advocacy​",
          subtitle: "Collaborate with stakeholders to influence policy changes that promote sustainability. "
        },
        {
          title: "Knowledge Exchange",
          subtitle: "Organise conferences, awards, networking events, webinars, and seminars to facilitate information sharing."
        },
        {
          title: "Sustainability Assessment",
          subtitle: "Collaborate with stakeholders to influence policy changes that promote sustainability. "
        },
      ]

      
  return (
    <div className='mt-32 px-[70px]'>
        <div className='flex flex-col gap-[4px]'>
            <p className='text-[#DF632D] font-inter font-semibold text-[41px]'>Our Services</p>
            <p className='text-lg text-[#000] font-inter w-[1094px]'>
                The demand for sustainable practices is rapidly increasing as businesses and governments recognise 
                the urgency of addressing environmental and social issues. GCS operates within a growing market 
                where organisations seek expertise and resources to transition towards more sustainable operations. 
                Our services are designed to meet this growing demand and drive meaningful change in sustainability 
                practices.
            </p>
        </div>
        <img src={ServicesImg} alt='Services' className='mt-[82px] w-[90%] mx-auto' /> {/* 1080px */}
        <div className='w-full grid grid-cols-2 gap-6 mt-[151px]'>
          {
            ServicesItems.map((item, index) => (
              <div key={index} className='w-full h-[145px] rounded-lg bg-[#10614E] p-6 flex flex-col gap-[5px]'>
                <p className='text-[#fff] font-inter font-semibold text-[22px]'>{item?.title}</p>
                <p className='text-[#fff] text-lg font-inter'>{item?.subtitle}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-center mt-[165px] flex-col'>
            <p className='w-[736px] text-center font-medium font-inter text-[67px] leading-[82px]'>
                Let’s Collaborate in building a better future
            </p>
            <div className='mt-[100px] mb-[980px]'>
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
                                    className='w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
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
                                className='w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
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
                                className='w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
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

export default Services