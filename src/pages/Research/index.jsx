import React from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'

import Hydrogen from "../../assets/png/hydrogen.png"
import Tech from "../../assets/png/tech.png"
import Economy from "../../assets/png/economy.png"

import ArrowUp from "../../assets/svg/arrow-up.svg"

const Research = () => {

  const loading = false

  const research = [
    {
      title: "Green Hydrogen",
      icon: Hydrogen,
      link: "/research/hydrogen",
      arrow: ArrowUp
    },
    {
      title: "AI tech for carbon reduction",
      icon: Tech,
      link: "/research/tech",
      arrow: ArrowUp
    },
    {
      title: "Transport Circular Economy",
      icon: Economy,
      link: "/research/economy",
      arrow: ArrowUp
    },
  ]

  return (
    <div className='mt-20'>
      <div className='flex flex-col gap-[4px] pl-[95px]'>
        <p className='text-[#DF632D] font-inter font-semibold text-[41px]'>Research</p>
        <p className='text-[22px] text-[#000] font-inter w-[1074px]'>
          At GCS we are teaming together with research institutions, government organisations, and universities. 
          Collaborating with professionals in the field can accelerate research and provide access to innovative 
          technology. 
        </p>
      </div>
      <div className='grid grid-cols-3 px-[140px] mt-[65px]'>
        {
          research.map((item, index) => (
            <div key={index} className='bg-[#234E49] w-[287px] h-[290px] flex flex-col justify-between p-4'>
              <div className='flex items-start '>
                <p className='font-inter font-medium text-[#fff] text-[30px]'>{item?.title}</p>
                <img src={item?.arrow} alt='arrow-up'/>
              </div>
              <img src={item?.icon} alt='icon' className='w-[70px] h-[54px]'/>
            </div>
          ))
        }
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

export default Research