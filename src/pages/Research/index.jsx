import React from 'react'
import { Form, Formik } from 'formik'
import { CgSpinner } from 'react-icons/cg'


import Tech from "../../assets/svg/ai_tech.svg"
import ActiveTravel from "../../assets/svg/active_travel.svg"
import Bio from "../../assets/svg/bio.svg"
import Biofuels from "../../assets/svg/biofuels_icon.svg"
import Circular from "../../assets/svg/circular_economy_icon.svg"
import Ev from "../../assets/svg/ev_icon.svg"
import Green from "../../assets/svg/green_hydrogen_icon.svg"
import Mobility from "../../assets/svg/mobility_icon.svg"
import Transport from "../../assets/svg/transport_circular_icon.svg"


import ArrowUp from "../../assets/svg/arrow-up.svg"
import { useNavigate } from 'react-router-dom'

const Research = () => {

  const loading = false

  const navigate = useNavigate()

  const research = [
    {
      title: "Green Hydrogen",
      icon: Green,
      link: "/research/green-hydrogen",
      arrow: ArrowUp
    },
    {
      title: "AI tech for carbon reduction",
      icon: Tech,
      link: "/research/tech",
      arrow: ArrowUp
    },
    {
      title: "Transport Circular Economy",
      icon: Transport,
      link: "/research/transport",
      arrow: ArrowUp
    },
    {
      title: "Circular economy in infrastructure and buildings ",
      icon: Circular,
      link: "/research/economy",
      arrow: ArrowUp
    },
    {
      title: "Electric vehicles and decarbonisation ",
      icon: Ev,
      link: "/research/ev",
      arrow: ArrowUp
    },
    {
      title: "Biofuels ",
      icon: Biofuels,
      link: "/research/biofuels",
      arrow: ArrowUp
    },
    {
      title: "Bio maritime decarbonisation  ",
      icon: Bio,
      link: "/research/maritime",
      arrow: ArrowUp
    },
    {
      title: "Mobility and social impact",
      icon: Mobility,
      link: "/research/mobility",
      arrow: ArrowUp
    },
    {
      title: "Active Travel",
      icon: ActiveTravel,
      link: "/research",
      arrow: ArrowUp
    },
  ]

  return (
    <div className='mt-32'>
      <div className='flex flex-col gap-[4px] px-5 lg:px-[140px] animate__animated animate__fadeInUp'>
        <p className='text-[#DF632D] font-inter font-semibold text-[34px] xl:text-[41px]'>Research</p>
        <p className='text-[22px] xl:text-[22px]  text-[#000] font-inter w-full'>
          At GCS we are teaming together with research institutions, government organisations, and universities. 
          Collaborating with professionals in the field can accelerate research and provide access to innovative 
          technology. 
        </p>
      </div>
      <div className='grid w-full gap-14 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5 lg:px-[140px] mt-[65px] animate__animated animate__fadeInUp'>
        {
          research.map((item, index) => (
            <div key={index} className='bg-[#3D5462] w-[100%] hover:bg-[#21A99D] cursor-pointer h-[290px] flex flex-col justify-between p-4' onClick={() => {navigate(item?.link); window.scroll(0, 0)}}>
              <div className='flex items-start justify-between '>
                <p className='font-inter font-medium text-[#fff] text-[30px]'>{item?.title}</p>
                <img src={item?.arrow} alt='arrow-up'/>
              </div>
              <img src={item?.icon} alt='icon' className='w-[70px] h-[54px]'/>
            </div>
          ))
        }
      </div>
      <div className='flex items-center justify-center mt-[42px] xl:mt-[165px] flex-col'>
        <p className='lg:w-[736px] text-center font-medium font-inter text-3xl lg:text-[67px] lg:leading-[82px] animate__animated animate__fadeInRight animate__delay-2s'>
            Let’s Collaborate in building a better future
        </p>
        <div className=' mt-[40px] lg:mt-[100px] mb-[100px] xl:mb-[385px]'>
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
                      <div className='flex flex-col gap-2  w-full md:w-[276px]'>
                      <input 
                          name="firstName"
                          placeholder="First Name"
                          type='text'
                          onChange={handleChange}
                          className=' w-full md:w-[276px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                      />
                      </div>
                      <div className='flex flex-col gap-2  w-full md:w-[276px]'>
                      <input 
                          name="lastName"
                          placeholder="Last Name"
                          type='text'
                          onChange={handleChange}
                          className=' w-full md:w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                      />
                      </div>

                  </div>

                  <div className=' w-full md:w-[587px] flex flex-col gap-2'>
                      <input 
                      name="companyName"
                      placeholder="Company Name"
                      type='text'
                      onChange={handleChange}
                      className=' w-full md:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
                      />
                  </div>

                  <div className=' w-full md:w-[587px] flex flex-col gap-2'>
                      <input 
                      name="workEmail"
                      placeholder="Work Email"
                      type='text'
                      onChange={handleChange}
                      className=' w-full md:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                      />
                  </div>

                  <div className='w-full md:w-[587px] flex flex-col gap-2'>
                      <input 
                      name="country"
                      placeholder="Country"
                      type='text'
                      onChange={handleChange}
                      className='w-full md:w-[587px] h-[58px] outline-none  border border-[#8F8F8F] p-2.5'
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

export default Research