import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'

import TechCarbon from "../../../assets/png/tech_carbon.png"

const Tech = () => {

    
    const loading = false

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
        <img src={TechCarbon} alt='Tech Carbon' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-[77px] py-[93px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[49px]'>AI tech for carbon reduction</p>
                <p className='font-inter text-[20px] w-[1126px]'>
                    In order to help UK industry reach their goal of net-zero carbon emissions, artificial intelligence (AI) is positioned to 
                    be an essential instrument. The data analysis, predictive modelling, and optimisation abilities of AI provide creative 
                    solutions to the problems associated with emissions reduction. Real-time data from industrial processes can be 
                    analysed by AI-driven energy management systems, which then automatically modify energy use to reduce waste 
                    and pollution. <br />
                    AI-powered predictive maintenance makes ensuring that equipment runs effectively, cutting down on energy use and 
                    emissions caused by downtime. <br />
                    AI algorithms can be used to optimise supply chains, reducing the need for carbon-intensive logistics. AI can also 
                    optimise energy usage patterns to lessen reliance on fossil fuels and help integrate renewable energy sources into 
                    industrial operations. AI also improves emissions reporting and tracking, assuring regulatory compliance and enabling 
                    industry to set aggressive reduction objectives. AI supports sustainable agricultural methods in agriculture that lower 
                    emissions from resource management and land use. <br />
                    Effective incentives and regulations for AI-driven solutions can be achieved through industry-government cooperation. 
                    UK industries are more prepared to handle the challenges of emissions reduction using AI as a strategic ally, speeding 
                    their progress towards a sustainable, net-zero carbon future.
                </p>
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

export default Tech