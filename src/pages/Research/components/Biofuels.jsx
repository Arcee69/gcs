import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import BioImg from "../../../assets/png/biofuels.png"

const Biofuels = () => {
    
    const loading = false

    const navigate = useNavigate()

    const submitForm = () => {

    }

  return (
    <div className='mt-32'>
        <div className='flex flex-col gap-4 px-5 lg:pl-[62px] lg:pr-0'>
            <p className='text-[#000] font-inter font-semibold text-4xl lg:text-[59px]'>Research</p>
            <p className='text-[20px] lg:text-[22px] text-[#000] font-inter w-[100%]'>
                At GCS we are teaming together with research institutions, government organisations, and universities. 
                Collaborating with professionals in the field can accelerate research and provide access to innovative 
                technology. 
            </p>
        </div>
        <img src={BioImg} alt='biofuels' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-5 lg:px-[77px] py-[93px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-4xl lg:text-[49px] w-[670px] leading-[72px]'>Biofuels</p>
                <p className='font-inter text-[20px]'>
                    Biofuels are a class of sustainable fuels made from organic materials like crops, agricultural waste, and algae. 
                    They are viewed as a possible alternative to traditional fossil fuels because of their ability to reduce greenhouse gas 
                    emissions and reliance on finite fossil fuel resources. Biodiesel, ethanol, and advanced biofuels are examples of important 
                    biofuels. <br />
                    Biodiesel is primarily made from vegetable oils or animal fats, and it can be blended with or used in place of diesel fuel in 
                    transportation and industrial uses. Ethanol, on the other hand, is derived mostly from crops such as corn, sugarcane, 
                    and wheat and is often used as a petrol additive to cut emissions. Cellulosic ethanol, algae-based biofuels, and synthetic 
                    fuels made from non-food biomass are examples of advanced biofuels. These advanced solutions are especially interesting 
                    since they may be made from waste materials, which reduces competition with food crops and minimises land use changes.
                    Because the carbon dioxide (CO2) emitted during combustion is countered by the CO2 absorbed by the plants or microbes 
                    employed in their synthesis, biofuels are considered environmentally benign. However, issues such as land-use disputes, 
                    food security concerns, and the long-term viability of large-scale biofuel production have sparked ongoing discussions 
                    regarding their true environmental and social implications. <br />
                    Optimising biofuel production processes for energy efficiency and waste reduction aids in lowering emissions connected 
                    with biofuel conversion. Life cycle analyses, which measure the environmental impact of biofuels from feedstock 
                    production to end use, help to lead efforts to improve sustainability. Biofuels can fulfil their promise as a more 
                    environmentally friendly energy source while contributing to global efforts to combat climate change and promote 
                    responsible resource management by embracing circular economy principles, adhering to certification standards, 
                    engaging local communities, and continuously advancing sustainable technologies. Biofuels have the potential to play 
                    a large role in decreasing carbon emissions in sectors such as transportation, thereby contributing to global efforts to 
                    battle climate change and create a more sustainable energy future as technology progresses and sustainability practises 
                    improve.
                </p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-start px-5 lg:px-0 lg:w-[1118px] lg:mx-auto gap-5 lg:gap-[134px] mt-[168px] mb-[108px]'>
            <div className='flex flex-col gap-[8px]'>
                <p className='font-inter font-semibold text-3xl lg:text-[44px]'>Become a member</p>
                <p className='text-[#19373E] text-xl lg:text-[24px] font-inter font-medium'>Join our growing community</p>
            </div>
            <div className='w-full  lg:mt-0 lg:w-auto'>
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

export default Biofuels