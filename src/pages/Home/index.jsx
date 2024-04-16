import React from 'react'
import { Divider } from '@mui/material'
import { CgSpinner } from 'react-icons/cg';
import { Formik, Form } from 'formik'
import { useNavigate, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Train from "../../assets/png/train.png"
import Stroller from "../../assets/png/stroller.png"
import FirstLauch from "../../assets/png/launch_a.png"
import SecondLauch from "../../assets/png/launch_b.png"
import ThirdLauch from "../../assets/png/launch_c.png"
import FourthLauch from "../../assets/png/launch_d.png"
import FifthLauch from "../../assets/png/launch_e.png"
import Banner from "../../assets/png/banner.png"
import BgMobile from "../../assets/png/bg-mobile.png"

import HomeHero from "../../assets/vid/home-hero.mp4"

import One from "../../assets/png/one.jpg"
import Two from "../../assets/png/two.jpg"
import Three from "../../assets/png/three.jpg"
import Four from "../../assets/png/four.jpg"
import Five from "../../assets/png/five.jpg"

import Bulb from "../../assets/svg/bulb.svg"
import Cursor from "../../assets/svg/cursor.svg"
import Aim from "../../assets/svg/aim.svg"
import Art from "../../assets/svg/art_logo.svg"
import Cesvit from "../../assets/svg/cesvit.svg"
import Transport from "../../assets/svg/transport.svg"
import Uon from "../../assets/svg/uon.svg"
import Warwick from "../../assets/svg/warwick.svg"
import West from "../../assets/svg/west_midlands.svg"
import { TbWood } from 'react-icons/tb';


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

  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className='w-full flex flex-col mt-20'>
      <div
        style={{ background: "#000000ab", backgroundRepeat:"no-repeat", backgroundSize:"cover",position: 'relative'}}
        className='w-full h-[587px] '
      >
         <video
            autoPlay
            loop
            muted
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, // Ensure the video is rendered behind other content
            }}
        >
        <source src={HomeHero} type="video/mp4" />
      
      </video>
        <div
          className='pt-[126px] pb-[107px] px-5 lg:pl-[149px] lg:pr-0 flex items-center' 
        >
          <div className='flex flex-col gap-[32px] animate__animated animate__fadeInUpBig'>
            <div className='flex flex-col gap-[9px] w-full lg:w-[417px]'>
              <p className='font-bold text-WHITE-_100 font-inter text-4xl lg:text-[51px] lg:leading-[68px]'>Global Centre of Excellence in Sustainability</p>
              <p className='font-medium font-inter text-[17px] text-[#fff]'>
                Receive expert support in evaluating, measuring, and embedding sustainability into your company
              </p>
            </div>
            <button
              className='border hover:border-[#DF5216] border-[#fff] text-center p-2 w-[113px] rounded-[22px]'
            >
              <p className='text-[#fff]'>Learn More</p>
            </button>  
          </div>
          <div></div>
        </div>
      </div>

      <div className='mx-auto w-[70%] hidden lg:flex justify-between items-center animate__animated animate__fadeInRight  animate__delay-2s'>
        <Link to="https://www.absoluterisktec.co.uk" target='blank'><img src={Art} alt='Art' /></Link>
        <Link to="https://cesvit.org" target='blank'><img src={Cesvit} alt='Cesvit' /></Link>
        <Link to="https://www.tfwm.org.uk" target='blank'><img src={Transport} alt='Transport'/></Link>
        <Link to="https://northampton.ac.uk" target='blank'><img src={Uon} alt='uon'/></Link>
        <Link to="https://warwick.ac.uk" target='blank'><img src={Warwick} alt='warwick' /></Link>
        <Link to="https://www.wmca.org.uk" target='blank'><img src={West} alt='west' /></Link> 
      </div>
      
      <div className='relative mt-[35px] flex flex-col xl:flex-row gap-[200px] px-5 lg:px-[130px] '> {/* justify-between */}

        <div className='flex flex-col items-center justify-center relative animate__animated animate__fadeInRightBig animate__delay-2s xl:hidden'>
          <div className='flex absolute top-[33px] left-[40px] md:right-[200px]'>
            <img src={BgMobile} alt='bg-mobile' className=' h-[320px]'/>
            <img src={Stroller} alt='Stroller' className='rounded-[171px] absolute h-[300px] top-[30px] left-[30px]' />
          </div>
        </div>

        <div className='flex flex-col mt-64 xl:mt-0 xl:w-[505px] gap-[36px]'>
          <div className='flex flex-col gap-[9px]'>
            <div className='flex items-center gap-4'>
              <img src={Bulb} alt='icon' />
              <p className='text-[#DF632D] font-bold text-[26px] '>Our Vision</p>
            </div>
            <p className='font-inter text-[#000] font-medium text-lg xl:w-[417px]'>
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
            <p className='font-inter text-[#000] font-medium text-lg xl:w-[514px]'>
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
            <p className='font-inter text-[#000] font-medium text-lg xl:w-[491px]'>
              World-leading hub of knowledge advancing sustainable practices 
              and solutions across various sectors.
            </p>
            <Divider className='bg-[#000] hidden xl:flex' />
          </div>
        </div>

        <div className='hidden xl:flex flex-col relative animate__animated animate__fadeInRightBig animate__delay-2s'>
          <div className='bg-[#02A396] w-[343px] h-[225px] rounded-[171px]'></div>
          <div className='flex absolute top-[43px] right-[37px]'>
            <div className='bg-[#DF632D] w-[343px] h-[537px] rounded-[171px]'></div>
            <img src={Stroller} alt='Stroller' className='rounded-[171px] absolute top-[10px] left-[37px]' />
          </div>
        </div>
      </div>

      <div className='mt-[20px] lg:mt-[80px] xl:mt-[160px] animate__animated animate__fadeInUpBig animate__delay-2s flex flex-col'>
        <div className='px-5 lg:px-[70px]'>
          <div className='flex flex-col'>
            <Divider className='bg-[#000]'/>
            <p className='font-inter text-[9px] font-bold'>GCS LAUNCH 2023</p>
          </div>
          <p className='text-[#141414] xl:w-[556px] text-[38px] xl:leading-[82px] font-inter font-bold xl:text-[104px] mx-auto text-center mt-[42px] lg:mt-[66px]'>
            The Grand Launch
          </p>
        </div>

        <div className='relative mt-5 hidden xl:block'>
          <div className='flex flex-col items-center xl:flex-row justify-between'>
            <img src={FirstLauch} alt='FirstLauch' className=' hidden xl:block hover:scale-105 md:w-[443px] left-0' />
            <img src={SecondLauch} alt='SecondLauch' className='md:w-[543px] lg:hover:scale-105'/>
            <img src={ThirdLauch} alt='ThirdLauch' className=' hidden xl:block md:w-[443px] right-0 hover:scale-105' />
          </div>
          <div className='hidden xl:flex flex-col xl:flex-row justify-between'>
            <img src={FourthLauch} alt='FourthLauch' className=' w-[443px] hover:scale-105 relative lg:-top-14  lg:left-44' />
            <img src={FifthLauch} alt='FifthLauch' className='w-[443px] hover:scale-105 relative lg:bottom-5 lg:right-24' />
          </div>
        </div>

        <div className='w-full xl:hidden mt-5'>
          <Slider {...settings}>
            <div className='w-full px-5 flex justify-center'>
              <img src={One} alt='FirstLauch' className=' hover:scale-105  ' />
            </div>
            <div className='w-full px-5 flex justify-center'>
              <img src={Two} alt='SecondLauch' className='hover:scale-105'/>
            </div>
            <div className='w-full px-5 flex justify-center'>
              <img src={Three} alt='ThirdLauch' className='hover:scale-105' />
            </div>
            <div className='w-full px-5 flex justify-center'>
              <img src={Four} alt='FourthLauch' className='hover:scale-105' />
            </div>
            <div className='w-full px-5 flex justify-center'>
              <img src={Five} alt='FifthLauch' className='hover:scale-105 ' />
            </div>
          </Slider>
        </div>

        <div className='flex flex-col items-center justify-center gap-[44px] px-5  lg:px-[70px]'>
          <p className='font-inter text-[13px] text-center '>
            The event was attended by representatives from Transport for West Midlands, UKTram, West Midlands Combined 
            Authority, Railway Industry Association, Colas Rail, Arup, Siemens, EY, Egis, SYSTRA, Frazer-Nash 
            Consultancy, Greater Birmingham Chambers of Commerce, Asian Business Chambers of Commerce & Aston University,
            and many more, symbolising our collective commitment to sustainability, environmental impact reduction, 
            and value creation for our communities and businesses.
          </p>
          <button 
            className='w-[251px] h-[62px] p-2 rounded-[31px] border  hover:bg-[#DF5216] text-BLACK-_100 hover:text-[#fff] border-[#DF5216]'
            onClick={() => navigate("/about")}
          >
            <p className='font-inter  font-semibold text-xl'>About us</p>
          </button>
        </div>
      </div>

      <div className='mt-[104px] flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS SERVICES</p>
        </div>
        <div className='lg:px-[25px] mt-[42px] xl:mt-[82px] flex flex-col gap-[14px] animate__animated animate__fadeInRightBig animate__delay-2s'>
          <p className='font-inter font-semibold text-[38px] text-BLACK-_100'>Our Services</p>
          <p className='font-inter text-lg text-BLACK-_100 text-left'>
            The demand for sustainable practices is rapidly increasing as businesses and governments recognise the urgency of addressing 
            environmental and social issues. GCS operates within a growing market where organisations seek expertise and resources to 
            transition towards more sustainable operations. Our services are designed to meet this growing demand and drive meaningful 
            change in sustainability practices.
          </p>
        </div>
        <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-[59px]'>
          {
            Services.map((item, index) => (
              <div key={index} className='w-full lg:h-[145px] rounded-lg bg-[#3D5462] hover:bg-[#21A99D] p-6 flex flex-col gap-[5px]'>
                <p className='text-[#fff] font-inter font-semibold text-[22px]'>{item?.title}</p>
                <p className='text-[#fff] text-base font-inter'>{item?.subtitle}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='mt-[120px] flex flex-col px-5 lg:px-[70px]'>
        <div className='flex flex-col'>
          <Divider className='bg-[#000]'/>
          <p className='font-inter text-[9px] font-bold'>GCS SERVICES</p>
        </div>
        
        <div className='flex items-center justify-center mt-[42px] xl:mt-[104px] flex-col'>
          <p className='lg:w-[736px] text-center font-medium font-inter text-3xl lg:text-[67px] lg:leading-[82px] animate__animated animate__fadeInRight  animate__delay-2s'>
            Let’s Collaborate in building a better future
          </p>
          <div className='mt-[40px] lg:mt-[100px] mb-[100px] lg:mb-[240px]'>
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
                            <div className='flex flex-col gap-2 w-full md:w-[276px]'>
                              <input 
                                name="firstName"
                                placeholder="First Name"
                                type='text'
                                onChange={handleChange}
                                className='w-full md:w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                              />
                            </div>
                            <div className='flex flex-col gap-2 w-full md:w-[276px]'>
                              <input 
                                name="lastName"
                                placeholder="Last Name"
                                type='text'
                                onChange={handleChange}
                                className='w-full md:w-[276px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                              />
                            </div>

                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="companyName"
                              placeholder="Company Name"
                              type='text'
                              onChange={handleChange}
                              className='w-full lg:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="workEmail"
                              placeholder="Work Email"
                              type='text'
                              onChange={handleChange}
                              className='w-full md:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
                            />
                          </div>

                          <div className='w-full md:w-[587px] flex flex-col gap-2'>
                            <input 
                              name="country"
                              placeholder="Country"
                              type='text'
                              onChange={handleChange}
                              className='w-full md:w-[587px] h-[58px] outline-none border border-[#8F8F8F] p-2.5'
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