import React from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'

import Hydrogen from "../../../assets/png/green.png"

const GreenHydrogen = () => {
    
    const loading = false;

    const submitForm = () => {

    }

  return (
    <div className='mt-20'>
        <div className='flex flex-col gap-[4px] pl-[62px]'>
            <p className='text-[#000] font-inter font-semibold text-[59px]'>Research</p>
            <p className='text-[22px] text-[#000] font-inter w-[1074px]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={Hydrogen} alt='Green Hydrogen' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-[62px] py-[88px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[49px]'>Green Hydrogen</p>
                <p className='font-inter text-[20px]'>
                    Research and innovation in green hydrogen are developing quickly due to the need to switch to 
                    more environmentally friendly energy sources and lower carbon emissions. 
                    GCS is looking to get involved in high-level research on green hydrogen which covers a variety of 
                    topics, such as manufacturing processes, storage, transportation, and usage. Some of the key areas 
                    of research would be: 
                </p>
            </div>

            <div className='flex flex-col gap-2 mt-[57px]'>
                <p className='font-inter font-medium text-[39px]'>Renewable Energy Integration</p>
                <p className='text-[20px] font-inter'>
                    Research into hybrid systems that integrate renewable energy, energy storage, and hydrogen production for increased
                    energy resiliency, as well as the integration of intermittent renewable energy sources like wind and solar into hydrogen 
                    manufacturing processes.
                </p>
            </div>

            <div className='flex flex-col gap-2 mt-[29px]'>
                <p className='font-inter font-medium text-[39px]'>Storage and transportation</p>
                <p className='text-[20px] font-inter'>
                    In order to facilitate long-distance transportation, research is being done on the design and materials for hydrogen 
                    pipelines as well as solid-state hydrogen storage materials and high-pressure tanks.
                </p>
            </div>

            <div className='flex flex-col gap-2 mt-[44px]'>
                <p className='font-inter font-medium text-[39px]'>Infrastructure and policy</p>
                <p className='text-[20px] font-inter'>Examining the creation of hydrogen distribution networks and refuelling stations to facilitate wider adoption.</p>
            </div>

            <div className='flex flex-col gap-2 mt-[44px]'>
                <p className='font-inter font-medium text-[39px]'>Environmental Impact</p>
                <p className='text-[20px] font-inter'>Investigating the potential for combining green hydrogen production with carbon capture and utilisation technology.</p>
            </div>

            <div className='flex flex-col gap-2 mt-[44px]'>
                <p className='font-inter font-medium text-[39px]'>International Collaboration</p>
                <p className='text-[20px] font-inter'>This would include collaboration between different countries to advance global initiatives and exchange knowledge in the field of green hydrogen research.</p>
            </div>
        </div>
        <div className='flex items-start w-[1118px] mx-auto gap-[134px] mt-[168px] mb-[108px]'>
            <div className='flex flex-col gap-[8px]'>
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
  )
}

export default GreenHydrogen