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
    <div className='mt-32 px-[62px] w-full'>
      <div className='flex items-start justify-between mt-[160px]'> {/* gap-[99px] */}
        <div className='flex flex-col gap-[283px] justify-between'>
          <div className='flex flex-col gap-[8px]'>
              <p className='font-inter font-semibold text-[50px]'>Contact Us</p>
              <p className='text-[#19373E] text-[24px] font-inter font-medium'>Fill out the form and we will get in touch</p>
          </div>
          <div className='flex flex-col gap-[8px] w-[331px] h-[27px]'>
              <p className='font-inter font-semibold text-[44px] text-[#585858]'>Or contact<br /> Us directly</p>
              <p className='text-[#19373E] text-[22px] font-inter font-semibold'>Info@gce-sustainability.com</p>
          </div>
        </div>
          <div>
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
                  <Form onSubmit={handleSubmit} className="flex ">
                      <div className="flex flex-col gap-[21px]">
                          
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
                                  className='w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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
                              className='w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-[587px] flex flex-col gap-2'>
                            <input 
                              name="phone"
                              placeholder="Phone number"
                              type='text'
                              onChange={handleChange}
                              className='w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-[587px] flex flex-col gap-2'>
                            <input 
                              name="country"
                              placeholder="Country"
                              type='text'
                              onChange={handleChange}
                              className='w-[587px] h-[58px] border outline-none  border-[#8F8F8F] p-2.5'
                            />
                          </div>
                          <div className='w-[587px] flex flex-col gap-2'>
                            <textarea
                              name="message"
                              className='w-[587px] outline-none border border-[#8F8F8F] p-2.5 h-[207px]'
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

      <div className='flex items-start justify-between mt-[127px] mb-[194px]'> {/* gap-[99px] */}
        <div className='flex flex-col gap-[8px] w-[451px]'>
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
                                className='w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                            />
                            </div>
                            <div className='flex flex-col gap-2 w-[276px]'>
                            <input 
                                name="lastName"
                                placeholder="Last Name"
                                type='text'
                                onChange={handleChange}
                                className='w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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
                            className='w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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

export default Contact