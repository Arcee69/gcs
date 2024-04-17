import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const loading = false

  const navigate = useNavigate()

  const submitForm = () => {

  }

  return (
    <div className='mt-32 px-5 lg:px-[62px] w-full'>
      <div className=' flex flex-col lg:flex-row items-start justify-between mt-[160px]'> {/* gap-[99px] */}
        <div className='flex flex-col lg:gap-[283px] justify-between animate__animated animate__fadeInLeftBig '>
          <div className='flex flex-col gap-[8px]'>
              <p className='font-inter font-semibold text-3xl lg:text-[50px]'>Contact Us</p>
              <p className='text-[#19373E] text-[20px] lg:text-[24px] font-inter font-medium'>Fill out the form and we will get in touch</p>
          </div>
          <div className='lg:flex flex-col hidden gap-[8px] w-[331px] h-[27px]'>
              <p className='font-inter font-semibold text-[44px] text-[#585858]'>Or contact<br /> Us directly</p>
              <p className='text-[#19373E] text-[22px] font-inter font-semibold'>Info@gce-sustainability.com</p>
          </div>
        </div>
          <div className='w-full mt-5 lg:mt-0 lg:w-auto animate__animated animate__fadeInRightBig '>
              <Formik
                  initialValues={{
                      firstName: "",
                      lastName: "",
                      companyName: "",
                      workEmail: "",
                      phone: "",
                      country: "",
                      message: ""
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
                  <Form onSubmit={handleSubmit} className="flex">
                      <div className="w-full flex flex-col gap-[21px]">
                          
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
                              className='w-full lg:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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
                              name="phone"
                              placeholder="Phone number"
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
                              className='w-full lg:w-[587px] h-[58px] border outline-none  border-[#8F8F8F] p-2.5'
                            />
                          </div>
                          <div className='w-full lg:w-[587px] flex flex-col gap-2'>
                            <textarea
                              name="message"
                              className='w-full lg:w-[587px] outline-none border border-[#8F8F8F] p-2.5 h-[207px]'
                              rows="5"
                              cols="10"
                              placeholder="Message"
                              type='text'
                              onChange={handleChange}
                            >

                            </textarea>
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

      <div className='flex flex-col lg:flex-row items-start justify-between mt-[127px] mb-[100px]'> {/* gap-[99px] */}
        <div className='flex flex-col gap-[8px] w-full lg:w-[451px] animate__animated animate__fadeInLeftBig '>
            <p className='font-inter font-semibold text-3xl lg:text-[50px]'>Become a member</p>
            <p className='text-[#19373E] text-xl lg:text-[24px] font-inter font-medium'>Join our growing community</p>
        </div>
        <div className='w-full mt-5 lg:mt-0 lg:w-auto animate__animated animate__fadeInRightBig  animate__delay-2s'>
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

export default Contact