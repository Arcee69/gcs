import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

import EvImg from "../../../assets/png/ev.png"

const Ev = () => {

    const loading = false

    const navigate = useNavigate()

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
        <img src={EvImg} alt='EV' className='mt-[82px] w-full' />
        <div className='bg-[#F6FFF2] px-[77px] py-[95px] w-full flex flex-col'>
            <div className='flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[49px]'>Electric Vehicles and decarbonisation</p>
                <p className='font-inter text-[20px]'>
                    In the process of decarbonizing the transportation industry, electric vehicles (EVs) are crucial in the fight against climate 
                    change and greenhouse gas emissions. Here is how EVs and the decarbonization strategy are related:
                    <ul className='list-disc px-10'>
                        <li className='font-inter text-[20px]'>
                            Reduced Emissions: Electric vehicles have zero tailpipe emissions, which means they do not generate dangerous 
                            pollutants like carbon monoxide and nitrogen oxides. This minimises local air pollution while also enhancing urban air 
                            quality and public health.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Greenhouse Gas Reduction: Switching from internal combustion engine vehicles (ICEVs) to electric cars (EVs) can 
                            significantly cut greenhouse gas emissions, especially if the EVs are fuelled by renewable energy sources. Electric 
                            vehicles are more energy efficient, and their carbon impact is determined by the energy source utilised for charging.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Grid Integration: Through vehicle-to-grid (V2G) technology, EVs can function as grid resources, storing extra renewable 
                            energy and feeding it back into the grid at peak demand. This contributes to grid balance and boosts the use of 
                            renewable energy.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Battery Technology: Battery advancements not only increase the range of EVs, but also make them more accessible 
                            and affordable. Battery cost reductions have increased EV adoption.
                        </li>
                        <li className='font-inter text-[20px]'>
                            Sustainable Materials: The transition to electric vehicles has raised concerns about the whole supply chain, including 
                            the source of minerals such as lithium and cobalt. There is an increasing emphasis on procuring these resources in a 
                            responsible and sustainable manner.
                        </li>
                    </ul>
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

export default Ev