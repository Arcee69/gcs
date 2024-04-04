import React from 'react'
import { Divider } from '@mui/material'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'

import LongTrain from "../../assets/png/long_train.png"
import GCES from "../../assets/png/gces.png"
import Art from "../../assets/png/art.png"

const About = () => {

  const loading = false

  return (
    <div className='mt-20'>
      <div className='flex flex-col px-[100px]'>
        <div className='flex gap-[90px]'>
          <p className='text-[#DF632D] font-semibold font-inter text-[41px]'>About Us</p>
          <p className='font-inter font-medium text-[22px] text-[#000] w-[796px]'>
            The Global Centre of Excellence in Sustainability (GCS) is a leader in the 
            sustainability field, providing a wide range of services to help organisations 
            achieve their environmental and social goals. GCS offers services such as 
            sustainability audits, technical assurance, climate and strategy reporting, 
            decarbonisation, and more. 
          </p>
        </div>
        <img src={LongTrain} alt='long train' className='mt-14'/>
        <div className='mt-24 flex flex-col gap-5'>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>“ Our objectives include </p>
          <p className='w-[854px] text-[29px] font-inter font-medium'>
            Driving transformative change, inspiring action, and 
            contributing to the achievement of global sustainability goals.
          </p>
        </div>
        <div className='mt-[58px] flex flex-col gap-5'>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>“ Our commitment</p>
          <p className='w-[928px] text-[29px] font-inter font-medium'>
            create a lasting positive impact on the planet and its 
            inhabitants, contributing to a future where prosperity and 
            well-being align with environmental stewardship and social equity. 
          </p>
        </div>



      </div>

      <div className='px-[70px] flex flex-col mt-[151px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS & ART</p>
        </div>
        <div className='flex flex-col px-[20px] mt-[50px] '>
          <div className='flex items-center gap-[29px]'>
            <img src={GCES} alt='GCES' className='w-[249px] rounded-xl' />
            <img src={Art} alt='ART' className='w-[249px] rounded-xl' />
          </div>
          <p className='font-inter font-medium text-[19px] leading-[52px] w-[1025px]'>
            GCS & ART are UK-based international companies leading not only in sustainability consultancy 
            consultancy but also a global leader in safety, reliability and assurance systems engineering 
            systems consultancy, within the train metro and energy sectors.
          </p>
          <button className='w-[251px] h-[62px] p-2 rounded-[31px] mt-5 border border-[#DF7B1F]'>
            <p className='font-inter text-BLACK-_100 font-semibold text-xl'>Visit ART</p>
          </button>
        </div>

      </div>

      <div className='mt-[120px] flex flex-col px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>CONTACT US</p>
        </div>
        
        <div className='flex items-center justify-center mt-[104px] flex-col'>
          <p className='w-[736px] text-center font-medium font-inter text-[67px] leading-[82px]'>
            Let’s Collaborate in building a better future
          </p>
          <div className='mt-[100px] mb-[290px]'>
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
    </div>
  )
}

export default About