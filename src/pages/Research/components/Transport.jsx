import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import TransportImg from "../../../assets/png/transport.png"

const Transport = () => {

    const loading = false

    const navigate = useNavigate()

    const submitForm = () => {

    }

  return (
    <div className='mt-32'>
       <div className='flex flex-col gap-4 px-5 lg:pl-[62px] lg:pr-0 animate__animated animate__fadeInUp'>
            <p className='text-[#000] font-inter font-semibold text-4xl lg:text-[59px]'>Research</p>
            <p className='text-[20px] lg:text-[22px] text-[#000] font-inter w-[100%]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={TransportImg} alt='Tech Carbon' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-5 lg:px-[77px] py-[93px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-3xl lg:text-[49px]'>Transport Circular Economy</p>
                <p className='font-inter text-[20px]'>
                    Incorporating the circular economy into railway systems creates an ecosystem that is resource-efficient and sustainable 
                    across the full rail lifecycle, going beyond just reaching net-zero emissions. This strategy puts waste reduction, 
                    effective resource management, and environmental stewardship above carbon neutrality.
                    <ul className='list-disc px-10'>
                        <li className='font-inter text-[20px]'>
                            Materials and Infrastructure: The use of enduring, low-maintenance materials that can sustain extensive use while 
                            designing railway infrastructure and investigating environmentally friendly building techniques and cutting-edge 
                            recycled materials.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Energy Efficiency: Beyond net zero, railroads can make investments in renewable energy sources to run their business, 
                            minimising their impact on the environment while maintaining a responsible energy footprint. 
                            The use of energy recovery techniques, such as regenerative braking, helps capture and repurpose energy and further 
                            cut down on waste.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Waste Reduction and Recycling: Develop extensive waste reduction and recycling programmes that cover items like 
                            railway ties, rails, and rolling stock parts at the end of their lifecycle.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Circular Procurement: Purchase goods and materials, such as recycled and remanufactured parts, from vendors who 
                            adhere to the principles of the circular economy. Create long-term alliances with suppliers to advance supply chain 
                            circularity.
                        </li>
                    </ul>
                    Beyond net-zero emissions, implementing circular economy in train systems requires a thorough, team effort from rail 
                    operators, manufacturers, governments, and passengers. This method transforms rail networks into resource-efficient, 
                    environmentally conscious ecosystems that support long-term economic viability and resilience in addition to 
                    environmental aims.<br />
                    <span className='underline cursor-pointer' onClick={() => navigate("https://theiam.org/media/4450/rail-circular-economy-paper.pdf")}>https://theiam.org/media/4450/rail-circular-economy-paper.pdf</span>
                </p>
                <div className='flex flex-col gap-2 mt-[33px]'>
                    <p className='font-inter font-semibold text-[24px] lg:text-[30px]'>Visit Circular Economy and Social Value in Transport (CESViT) to learn more</p>
                    <p className='font-inter text-[20px] font-normal'>A research conducted by <span className='font-semibold'>Absolute Risk Technology</span></p>
                    <div className='flex items-center justify-between'>
                        <button
                            type='button'
                            className="w-[124px] text-[#fff] font-inter flex items-center justify-center mt-[26px] h-[46px] bg-[#000] text-lg rounded text-center"
                        >
                            Learn More
                        </button>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>

        <div className='flex flex-col lg:flex-row items-start px-5 lg:px-0 lg:w-[1118px] lg:mx-auto gap-5 lg:gap-[134px] mt-[168px] mb-[108px]'>
            <div className='flex flex-col gap-[8px]'>
                <p className='font-inter font-semibold text-3xl lg:text-[44px]'>Become a member</p>
                <p className='text-[#19373E] text-xl lg:text-[24px] font-inter font-medium'>Join our growing community</p>
            </div>
            <div className='w-full lg:mt-0 lg:w-auto'>
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

export default Transport