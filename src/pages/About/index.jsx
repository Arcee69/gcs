import React from 'react'
import { Divider } from '@mui/material'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

// import LongTrain from "../../assets/png/long_train.png"
import LongTrain from "../../assets/png/about-b.jpg"
import GCES from "../../assets/png/gces.png"
import Art from "../../assets/png/art.png"
import BgMobile from "../../assets/png/bg-mobile.png"

import AboutMask from "../../assets/svg/about-2.svg"
import Eye from "../../assets/svg/eye.svg"
import Commit from "../../assets/svg/commit.svg"

const About = () => {

  const loading = false;

  const navigate = useNavigate()

  return (
    <div className='w-full mt-32'>
      <div className='flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-[150px]'>
          <p className='text-[#DF632D] font-semibold font-inter text-[34px]  animate__animated animate__fadeInLeftBig   xl:text-[41px]'>About Us</p>
          <p className='font-inter font-medium text-lg xl:text-[22px] text-[#000] lg:w-[796px] animate__animated animate__fadeInRightBig'>
            The Global Centre of Excellence in Sustainability (GCS) is a leader in the 
            sustainability field, providing a wide range of services to help organisations 
            achieve their environmental and social goals. GCS offers services such as 
            sustainability audits, technical assurance, climate and strategy reporting, 
            decarbonisation, and more. 
          </p>
        </div>
        <img src={LongTrain} alt='long train' className='mt-14 rounded-xl animate__animated animate__fadeInUpBig '/>

        <div className='relative lg:mt-[79px] mb-[79px] flex flex-col lg:flex-row gap-[200px] px-5 lg:px-[120px]'>

        <div className='flex flex-col items-center justify-center relative animate__animated animate__fadeInRightBig animate__delay-2s lg:hidden'>
          <div className='flex absolute top-[33px] left-[40px] md:right-[200px]'>
            <img src={BgMobile} alt='bg-mobile' className=' h-[320px]'/>
            <img src={AboutMask} alt='Stroller' className='rounded-[171px] absolute h-[300px] top-[30px] left-[30px]' />
          </div>
        </div>

          <div className='flex flex-col mt-64 lg:mt-0 lg:w-[505px] my-auto gap-[36px]'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4'>
                <img src={Eye} alt='icon' />
                <p className='font-inter text-[26px] font-medium text-[#DF632D] '>Our objective</p>
              </div>
              <p className='lg:w-[470px] text-lg leading-[36px] font-inter font-medium'>
                Driving transformative change, inspiring action, and 
                contributing to the achievement of global sustainability goals.
              </p>
              <Divider className='bg-[#000]' />
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4'>
                <img src={Commit} alt='icon' />
                <p className='font-inter text-[26px] font-medium text-[#DF632D] '>Our commitment</p>
              </div>
              <p className='lg:w-[470px] text-lg leading-[36px]  font-inter font-medium'>
                create a lasting positive impact on the planet and its 
                inhabitants, contributing to a future where prosperity and 
                well-being align with environmental stewardship and social equity. 
              </p>
            </div>
          </div>

          <div className='hidden lg:flex flex-col relative animate__animated animate__fadeInRightBig animate__delay-2s'>
            <div className='bg-[#02A396] w-[343px] h-[225px] rounded-[171px]'></div>
            <div className='flex absolute top-[43px] right-[37px]'>
              <div className='bg-[#FFDECD] w-[343px] h-[537px] rounded-[171px]'></div>
              <img src={AboutMask} alt='AboutMask'  className='rounded-[171px] absolute top-[10px] left-[37px]' />
            </div>
          </div>
        </div>

        {/* <div className='mt-[42px] lg:mt-24 flex flex-col gap-5 animate__animated animate__fadeInUpBig '>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>Our objective</p>
          <p className='lg:w-[854px] text-lg lg:text-[29px] lg:leading-[52px] font-inter font-medium'>
            Driving transformative change, inspiring action, and 
            contributing to the achievement of global sustainability goals.
          </p>
        </div>
        <div className='mt-[42px] xl:mt-[58px] flex flex-col gap-5 animate__animated animate__fadeInUpBig animate__delay-2s '>
          <p className='font-inter text-[29px] font-medium text-[#DF632D] '>Our commitment</p>
          <p className='lg:w-[928px] text-lg lg:text-[29px] lg:leading-[52px] font-inter font-medium'>
            create a lasting positive impact on the planet and its 
            inhabitants, contributing to a future where prosperity and 
            well-being align with environmental stewardship and social equity. 
          </p>
        </div> */}

      </div>

      <div className='px-5 lg:px-[70px] flex flex-col mt-[42px] lg:mt-[200px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS & ART</p>
        </div>
        <div className='flex flex-col px-[20px] mt-[50px]  animate__animated animate__fadeInUpBig'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-[29px]'>
            <img src={GCES} alt='GCES' className='w-[249px] rounded-xl' />
            <img src={Art} alt='ART' className='w-[249px] rounded-xl' />
          </div>
          <p className='font-inter font-medium text-lg lg:leading-[52px] xl:text-[22px] lg:w-[1025px]'>
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

      <div className='mt-[42px] xl:mt-[120px] flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>CONTACT US</p>
        </div>
        
        <div className='flex items-center justify-center mt-[104px] flex-col'>
          <p className='lg:w-[736px] text-center font-medium font-inter text-3xl lg:text-[67px] lg:leading-[82px] animate__animated animate__fadeInRight  animate__delay-2s'>
            Let’s Collaborate in building a better future
          </p>
          <div className='mt-[42px] xl:mt-[100px] mb-[100px] lg:mb-[290px]'>
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