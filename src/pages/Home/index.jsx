import React from 'react'
import { Divider } from '@mui/material'
import { CgSpinner } from 'react-icons/cg';

import Train from "../../assets/png/train.png"
import Stroller from "../../assets/png/stroller.png"
import FirstLauch from "../../assets/png/launch_a.png"
import SecondLauch from "../../assets/png/launch_b.png"
import ThirdLauch from "../../assets/png/launch_c.png"
import FourthLauch from "../../assets/png/launch_d.png"
import FifthLauch from "../../assets/png/launch_e.png"

import Bulb from "../../assets/svg/bulb.svg"
import Cursor from "../../assets/svg/cursor.svg"
import Aim from "../../assets/svg/aim.svg"
import { Formik, Form } from 'formik'

const Home = () => {

  const loading = false

  const Services = [
    {
      title: "Research and Insights​",
      subtitle: "Conduct comprehensive research on sustainability trends, challenges, and best practices to inform decision-making. "
    },
    {
      title: "Capacity Building",
      subtitle: "Develop workshops, training, and certification programs to empower professionals with sustainable skills."
    },
    {
      title: "Consultancy​",
      subtitle: "Develop workshops, training, and certification programs to empower professionals with sustainable skills."
    },
    {
      title: "Advocacy​",
      subtitle: "Collaborate with stakeholders to influence policy changes that promote sustainability. "
    },
    {
      title: "Knowledge Exchange",
      subtitle: "Organise conferences, awards, networking events, webinars, and seminars to facilitate information sharing."
    },
    {
      title: "Sustainability Assessment",
      subtitle: "Collaborate with stakeholders to influence policy changes that promote sustainability. "
    },
  ]

  const submitForm = () => {

  }

  return (
    <div className='flex flex-col'>
      <div
        style={{ backgroundImage: `url(${Train})`, backgroundSize:"cover", backgroundRepeat: "no-repeat", position:"relative" }}
        className='w-full h-[587px] '
      >
        <div
          className='pt-[126px] pb-[107px] pl-[149px] flex items-center' 
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <div className='flex flex-col gap-[32px]'>
            <div className='flex flex-col gap-[9px] w-[417px]'>
              <p className='font-bold text-WHITE-_100 font-inter text-[51px] leading-[68px]'>Global Centre of Excellence in Sustainability</p>
              <p className='font-medium font-inter text-[17px] text-[#fff]'>
                Receive expert support in evaluating, measuring, and embedding sustainability into your company
              </p>
            </div>
            <button
              className='border border-[#fff] text-center p-2 w-[113px] rounded-[22px]'
            >
              <p className='text-[#fff]'>Learn More</p>
            </button>  
          </div>
          <div></div>
        </div>
      </div>
      <div className='relative mt-[35px] flex gap-[144px] px-[130px] '>
        <div className='flex flex-col w-[505px] gap-[36px]'>
          <div className='flex flex-col gap-[9px]'>
            <div className='flex items-center gap-4'>
              <img src={Bulb} alt='icon' />
              <p className='text-[#DF632D] font-bold text-[26px] '>Our Vision</p>
            </div>
            <p className='font-inter text-[#000] font-medium text-lg w-[417px]'>
              To be a global leader in advancing sustainability practices, 
              inspiring transformative change for a better world. 
            </p>
            <Divider className='bg-[#000]' />
          </div>

          <div className='flex flex-col gap-[9px]'>
            <div className='flex items-center gap-4'>
              <img src={Cursor} alt='icon' />
              <p className='text-[#DF632D] font-bold text-[26px] '>Mission</p>
            </div>
            <p className='font-inter text-[#000] font-medium text-lg w-[514px]'>
              We champion sustainability by driving innovation, research, 
              and collaboration. We empower industries, governments, 
              and communities to embrace and implement sustainable 
              practices through: 
            </p>
            <Divider className='bg-[#000]' />
          </div>

          <div className='flex flex-col gap-[9px]'>
            <div className='flex items-center gap-4'>
              <img src={Aim} alt='icon' />
              <p className='text-[#DF632D] font-bold text-[26px] '>Aims</p>
            </div>
            <p className='font-inter text-[#000] font-medium text-lg w-[491px]'>
              World-leading hub of knowledge advancing sustainable practices 
              and solutions across various sectors.
            </p>
            <Divider className='bg-[#000]' />
          </div>
        </div>

        <div className='flex flex-col relative'>
          <div className='bg-[#02A396] w-[343px] h-[225px] rounded-[171px]'></div>
          <div className='flex absolute top-[43px] right-[37px]'>
            <div className='bg-[#FFDECD] w-[343px] h-[537px] rounded-[171px]'></div>
            <img src={Stroller} alt='Stroller' className='rounded-[171px] absolute top-[10px] left-[37px]' />
          </div>
        </div>
      </div>

      <div className='mt-[160px]  flex flex-col'>
        <div className='px-[70px]'>
          <div className='flex flex-col'>
            <Divider className='bg-[#000]'/>
            <p className='font-inter text-[9px] font-bold'>GCS LAUNCH 2023</p>
          </div>
          <p className='text-[#141414] w-[556px] leading-[82px] font-inter font-bold text-[104px] mx-auto text-center mt-[66px]'>
            The Grand Launch
          </p>
        </div>
        <div className='relative mt-5'>
          <div className='flex gap-14 '>
            <img src={FirstLauch} alt='FirstLauch' className='w-[443px] left-0' />
            <img src={SecondLauch} alt='SecondLauch' className='w-[543px]'/>
            <img src={ThirdLauch} alt='ThirdLauch' className='w-[443px] right-0' />
          </div>
          <div className='flex justify-between'>
            <img src={FourthLauch} alt='FourthLauch' className='w-[443px] relative -top-14 -z-10 left-44' />
            <img src={FifthLauch} alt='FifthLauch' className='w-[443px] relative -top-24 right-8' />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-[44px] px-[70px]'>
          <p className='font-inter text-[13px] text-center '>
            The event was attended by representatives from Transport for West Midlands, UKTram, West Midlands Combined 
            Authority, Railway Industry Association, Colas Rail, Arup, Siemens, EY, Egis, SYSTRA, Frazer-Nash 
            Consultancy, Greater Birmingham Chambers of Commerce, Asian Business Chambers of Commerce & Aston University,
            and many more, symbolising our collective commitment to sustainability, environmental impact reduction, 
            and value creation for our communities and businesses.
          </p>
          <button className='w-[251px] h-[62px] p-2 rounded-[31px] border border-[#DF7B1F]'>
            <p className='font-inter text-BLACK-_100 font-semibold text-xl'>About us</p>
          </button>
        </div>
      </div>

      <div className='mt-[104px] flex flex-col px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS SERVICES</p>
        </div>
        <div className='px-[20px] mt-[82px] flex flex-col gap-[14px]'>
          <p className='font-inter font-semibold text-[38px] text-BLACK-_100'>Our Services</p>
          <p className='font-inter text-lg text-BLACK-_100'>
            The demand for sustainable practices is rapidly increasing as businesses and governments recognise the urgency of addressing 
            environmental and social issues. GCS operates within a growing market where organisations seek expertise and resources to 
            transition towards more sustainable operations. Our services are designed to meet this growing demand and drive meaningful 
            change in sustainability practices.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-6 mt-[59px]'>
          {
            Services.map((item, index) => (
              <div key={index} className='w-[570px] h-[145px] rounded-lg bg-[#10614E] p-6 flex flex-col gap-[5px]'>
                <p className='text-[#fff] font-inter font-semibold text-[22px]'>{item?.title}</p>
                <p className='text-[#fff] text-lg font-inter'>{item?.subtitle}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='mt-[120px] flex flex-col px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS SERVICES</p>
        </div>
        
        <div className='flex items-center justify-center mt-[104px] flex-col'>
          <p className='w-[736px] text-center font-medium font-inter text-[67px] leading-[82px]'>
            Let’s Collaborate in building a better future
          </p>
          <div className='mt-[100px] mb-[240px]'>
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

    </div>
  )
}

export default Home