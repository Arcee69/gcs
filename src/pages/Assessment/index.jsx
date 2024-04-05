import React from 'react'
import { Divider } from '@mui/material'
import { Form,Formik } from 'formik';
import { CgSpinner } from 'react-icons/cg';

import Sustainability from "../../assets/png/sustainability.png"

import AirEmission from "../../assets/svg/air_emission.svg";
import Waste from "../../assets/svg/waste.svg";
import Climate_Change from "../../assets/svg/climate_change.svg";
import Social from "../../assets/svg/social_sustainability.svg";
import Environmental from "../../assets/svg/environmental_sustainability.svg";
import Culture from "../../assets/svg/culture.svg";
import Communities from "../../assets/svg/sustainable_communities.svg";
import Health from "../../assets/svg/health.svg";
import Investment from "../../assets/svg/investment.svg";
import Education from "../../assets/svg/education.svg";
import Biodiversity from "../../assets/svg/biodiversity.svg";
import Governance from "../../assets/svg/governance.svg";
import Plans from './component/Plans';

const Assessment = () => {

  const loading = false

  const services = [
    {
        img: AirEmission,
        title: "Air Emmissions",
        list_a: "Evaluate air quality and emissions, including greenhouse gases",
        list_b: "Identify sources of emissions and recommend reduction strategies​",
        list_c: "Assess compliance with air quality regulations",
    },
    {
        img: Waste,
        title: "Waste",
        list_a: "Analyse waste generation and management practices​",
        list_b: "Ensure adherence to waste disposal regulations",
        list_c: "Recommend waste reduction, recycling, and disposal solutions"
    },
    {
        img: Climate_Change,
        title: "Climate Change",
        list_a: "Analyse carbon footprint and emissions reduction initiatives​",
        list_b: "Assess climate change adaptation and mitigation strategies​​",
        list_c: "Advise on climate-resilient practice",
    },
    {
        img: Social,
        title: "Social Sustainability",
        list_a: "Assess social impact, diversity, and inclusivity​",
        list_b: "Review labour practices and employee well-being​​",
        list_c: "Suggest improvements for social responsibility and ethical conduct",
    },
    {
        img: Environmental,
        title: "Environmental Sustainability",
        list_a: "Evaluate resource consumption and conservation efforts",
        list_b: "Analyse environmental policies and compliance with regulations​",
        list_c: "Recommend eco-friendly practices for energy, water, and land use",
    },
    {
        img: Culture,
        title: "Culture",
        list_a: "Examine organisational culture and values​",
        list_b: "Evaluate alignment with sustainability objectives​",
        list_c: "Suggest measures to cultivate a sustainable culture",
    },
    {
        img: Communities,
        title: "Sustainable Communities",
        list_a: "Investigate community engagement and partnerships​",
        list_b: "Evaluate social and economic contributions to local communities​",
        list_c: "Advise on community-centric sustainability initiatives",
    },
    {
        img: Health,
        title: "Health & Well-Being",
        list_a: "Review health and safety policies and practices​",
        list_b: "Assess employee well-being programs and mental health support​",
        list_c: "Recommend measures to enhance health and well-being",
    },
    {
        img: Investment,
        title: "Investment for Sustainability",
        list_a: "Examine organisational culture and values​",
        list_b: "Evaluate alignment with sustainability objectives​",
        list_c: "Suggest measures to cultivate a sustainable culture",
    },
    {
        img: Education,
        title: "Education & Stakeholders",
        list_a: "Evaluate sustainability education and awareness programs​",
        list_b: "Analyse stakeholder engagement & communication​",
        list_c: "Suggest methods to enhance education and stakeholder relations",
    },
    {
        img: Biodiversity,
        title: "Biodiversity",
        list_a: "Assess impacts on local ecosystems and biodiversity​",
        list_b: "Recommend conservation and biodiversity protection measures",
        list_c: "Ensure compliance with wildlife & habitat protection regulations",
    },
    {
        img: Governance,
        title: "Governance",
        list_a: "Examine governance structures and ethical decision-making​​",
        list_b: "Analyse transparency, accountability, and compliance with regulations",
        list_c: "Provide guidance for strengthening governance for sustainability",
    },

]

  const submitForm = () => {

  }

  return (
    <div className='mt-20'>
      <div className='flex flex-col gap-[4px] pl-[95px]'>
        <p className='text-[#DF632D] font-inter font-semibold text-[41px]'>Sustainability Assessment</p>
        <p className='text-[22px] text-[#000] font-inter w-[949px]'>
          Specialising in sustainability audits, strategic consultancy and capacity building programs, 
          GCS aligns organisations with the global sustainable development goals
        </p>
      </div>
      <img src={Sustainability} alt='Sustainability-Assessment' className='mt-[82px] w-[1080px] mx-auto' />
      <p className='text-center font-semibold text-[46px] mt-40'>The Sustainability Assessment Framework</p>
      <div className='flex flex-col gap-[74px] mt-[59px] px-[65px]'>
        <Divider className='bg-[#E1E1E1]' />
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-[63px]  mx-auto '>
          {services.map((item, index) => (
            <div key={index} className='flex flex-col gap-[20px]'>
                <img src={item?.img} className='md:w-[34px] md:h-[31px] xl:w-[47px] xl:h-[51px]' />
                <div className='flex flex-col gap-[10px]'>
                    <p className='font-hanken text-lg font-semibold text-BLACK-_100'>{item?.title}</p>
                    <hr />
                </div>
                <ul className='w-[240px] list-disc'>
                    <li className='font-hanken text-[14px]'>{item?.list_a}</li>
                    <li className='font-hanken text-[14px]'>{item?.list_b}</li>
                    <li className='font-hanken text-[14px]'>{item?.list_c}</li>
                </ul>
            </div>
          ))}
        </div>
      </div>
      <Plans />
      <div className='flex items-center justify-center mt-[165px] flex-col'>
            <p className='w-[736px] text-center font-medium font-inter text-[67px] leading-[82px]'>
                Let’s Collaborate in building a better future
            </p>
            <div className='mt-[100px] mb-[385px]'>
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
                                    className='w-[276px] h-[58px] border outline-none  border-[#8F8F8F] p-2.5'
                                />
                                </div>
                                <div className='flex flex-col gap-2 w-[276px]'>
                                <input 
                                    name="lastName"
                                    placeholder="Last Name"
                                    type='text'
                                    onChange={handleChange}
                                    className='w-[276px] h-[58px] border outline-none border-[#8F8F8F] p-2.5'
                                />
                                </div>

                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="companyName"
                                placeholder="Company Name"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] border outline-none  border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="workEmail"
                                placeholder="Work Email"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] border outline-none border-[#8F8F8F] p-2.5'
                                />
                            </div>

                            <div className='w-[587px] flex flex-col gap-2'>
                                <input 
                                name="country"
                                placeholder="Country"
                                type='text'
                                onChange={handleChange}
                                className='w-[587px] h-[58px] border outline-none border-[#8F8F8F] p-2.5'
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

export default Assessment