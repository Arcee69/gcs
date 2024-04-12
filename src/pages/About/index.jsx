import React from 'react'
import { Divider } from '@mui/material'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'

import LongTrain from "../../assets/png/long_train.png"
import GCES from "../../assets/png/gces.png"
import Art from "../../assets/png/art.png"
import { useNavigate } from 'react-router-dom'

const About = () => {

  const loading = false;

  const navigate = useNavigate()

  return (
    <div className='w-full mt-32'>
      <div className='flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-[150px]'>
          <p className='text-[#DF632D] font-semibold font-inter text-[34px]  animate__animated animate__fadeInLeftBig w-44 lg:text-[28px] xl:text-[41px]'>About Us</p>
          <p className='font-inter font-medium text-lg lg:text-[22px] text-[#000] lg:w-[796px] animate__animated animate__fadeInRightBig'>
            The Global Centre of Excellence in Sustainability (GCS) is a leader in the 
            sustainability field, providing a wide range of services to help organisations 
            achieve their environmental and social goals. GCS offers services such as 
            sustainability audits, technical assurance, climate and strategy reporting, 
            decarbonisation, and more. 
          </p>
        </div>
        <img src={LongTrain} alt='long train' className='mt-14 animate__animated animate__fadeInUpBig '/>
        <div className='mt-24 flex flex-col gap-5 animate__animated animate__fadeInUpBig '>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>“ Our objectives include </p>
          <p className='lg:w-[854px] text-lg lg:text-[29px] font-inter font-medium'>
            Driving transformative change, inspiring action, and 
            contributing to the achievement of global sustainability goals.
          </p>
        </div>
        <div className='mt-[58px] flex flex-col gap-5 animate__animated animate__fadeInUpBig animate__delay-2s '>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>“ Our commitment</p>
          <p className='lg:w-[928px] text-lg lg:text-[29px] font-inter font-medium'>
            create a lasting positive impact on the planet and its 
            inhabitants, contributing to a future where prosperity and 
            well-being align with environmental stewardship and social equity. 
          </p>
        </div>



      </div>

      <div className='px-5 lg:px-[70px] flex flex-col mt-[151px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS & ART</p>
        </div>
        <div className='flex flex-col px-[20px] mt-[50px]  animate__animated animate__fadeInUpBig'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-[29px]'>
            <img src={GCES} alt='GCES' className='w-[249px] rounded-xl' />
            <img src={Art} alt='ART' className='w-[249px] rounded-xl' />
          </div>
          <p className='font-inter font-medium text-[14px] md:text-[19px] lg:leading-[52px] lg:w-[1025px]'>
            GCS & ART are UK-based international companies leading not only in sustainability consultancy 
            consultancy but also a global leader in safety, reliability and assurance systems engineering 
            systems consultancy, within the train metro and energy sectors.
          </p>
          <button 
            className='w-[251px] h-[62px] p-2 rounded-[31px] mt-10 lg:mt-5 border hover:bg-[#DF5216] hover:text-[#fff] border-[#DF5216] text-BLACK-_100 hover:border-[#DF7B1F]'
            onClick={() => navigate("https://www.absoluterisktec.co.uk")}
          >
            <p className='font-inter  font-semibold text-xl'>Visit ART</p>
          </button>
        </div>

      </div>

      <div className='mt-[120px] flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>CONTACT US</p>
        </div>
        
        <div className='flex items-center justify-center mt-[104px] flex-col'>
          <p className='lg:w-[736px] text-center font-medium font-inter text-3xl lg:text-[67px] lg:leading-[82px] animate__animated animate__fadeInRight  animate__delay-2s'>
            Let’s Collaborate in building a better future
          </p>
          <div className='mt-[40px] lg:mt-[100px] mb-[290px]'>
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
                          
                          <div className='flex flex-col md:flex-row items-center gap-[35px]'>
                            <div className='flex flex-col gap-2 w-full md:w-[276px]'>
                              <input 
                                name="firstName"
                                placeholder="First Name"
                                type='text'
                                onChange={handleChange}
                                className='w-full md:w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                              />
                            </div>
                            <div className='flex flex-col gap-2 w-full md:w-[276px]'>
                              <input 
                                name="lastName"
                                placeholder="Last Name"
                                type='text'
                                onChange={handleChange}
                                className='w-full md:w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                              />
                            </div>

                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="companyName"
                              placeholder="Company Name"
                              type='text'
                              onChange={handleChange}
                              className='w-full md:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="workEmail"
                              placeholder="Work Email"
                              type='text'
                              onChange={handleChange}
                              className='w-full md:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="country"
                              placeholder="Country"
                              type='text'
                              onChange={handleChange}
                              className='w-full md:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
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