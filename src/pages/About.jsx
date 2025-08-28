import React from 'react'
import CommonHead from '../components/common/CommonHead'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router';
import { LuDownload } from 'react-icons/lu';


import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import banner2 from "../assets/images/banner2.png";

import banner4 from "../assets/images/banner4.png";




const About = () => {
    

  return (
    <>
    
    {/* --------- profile-part */}
    <section id='about' className='bg-[#101010] h-screen relative'>
        <div className="container">
            <div className='pt-[70px] text-center'><CommonHead commonp={'Get to know me'} commonh2={'About Me'}  /></div>
            <div id='about-row'>
                {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>

{/* ---------------- cross button */}
                <div className=' absolute top-[30px] right-[60px]'><Link to={'/'} ><RxCross1 className='text-[30px] text-white' /></Link>  </div>


                {/* ---------- images part */}

                <div className='flex justify-center mt-[100px]'>
                    {/* ------------ left-side */}
                    <div className='w-[400px] h-[350px] overflow-hidden '><img src="#" alt="my-img" /></div>
                    
                    {/* ----------- right-side */}
                    <div>
                    <div>
                        <p className='text-[24px] font-medium font-main text-[#009e66]'>Who am i?</p>
                    <div className='w-[690px] my-[20px]' >
                        <h2 className='text-[31px]  font-bold font-main text-[#F0F0F0]'>I'm Emma Smith, a visual UX/UI Designer and Web Developer</h2>
                    </div>
                        <div className='w-[667px] border-b border-[#9f9f9f22] pb-[40px]'><p className='text-[15px] font-normal font-main text-[#9F9F9F]'>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p></div>
                    </div>

            {/* ------------ address part */}
            <address>
                <div className='pt-[30px] pb-[40px]'> 

                <div className='flex gap-[180px]'>
                    <div className='flex gap-[10px]'>
                        <h3 className='text-[15px] font-normal font-main text-[#DADADA]'>Name:</h3>
                        <p className='text-[15px] font-normal font-main text-[#9F9F9F]'>Emma Smith</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <h3 className='text-[15px] font-normal font-main text-[#DADADA]'>Email:</h3>
                        <a href='' className='text-[15px] font-normal font-main text-[#9F9F9F]'>emma@example.com</a>
                    </div>
                </div>
                   <div className='flex gap-[276px] pt-[20px]'>
                    <div className='flex gap-[10px]'>
                        <h3 className='text-[15px] font-normal font-main text-[#DADADA]'>Age:</h3>
                        <p className='text-[15px] font-normal font-main text-[#9F9F9F]'>21</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <h3 className='text-[15px] font-normal font-main text-[#DADADA]'>From:</h3>
                        <p className='text-[15px] font-normal font-main text-[#9F9F9F]'>Liverpool, UK</p>
                    </div>
                </div>
                </div>
            </address>

            {/* -------------- button */}
                 <a href="/cv.pdf"  download  className=" py-[10px] px-[35px] mt-[30px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border ">Download CV</a>
            </div>


                    </div>
            </div>
        </div>
    </section>
    
    {/* ------------- service-part */}
    <section id='about2' className='bg-[#101010] h-screen relative'>
        <div className="container">
            <div><CommonHead commonp={'Services i offer to my clients'} commonh2={'My Services'} /></div>
            <div id='about2-row'>

                        {/* Professional Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-around gap-10 bg-white rounded-xl shadow-lg p-8">
          <div className="w-full max-w-xs bg-[#F0F1F3] rounded-lg h-72 overflow-hidden flex items-center justify-center mb-6 lg:mb-0">
            <img
              className="w-full object-contain"
              src={banner2}
              alt="Professional work"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold font-main text-[#132238] mb-4">
              I am a Professional User Experience Designer
            </h2>
            <div className="py-4">
              <p className="text-base md:text-lg font-normal font-main text-[#556070] mb-2">
                I design and develop services for clients, specializing in
                creating stylish, modern websites, web services, and online
                stores. My passion is crafting digital user experiences that are
                both beautiful and functional.
              </p>
              <p className="text-base md:text-lg font-normal font-main text-[#556070]">
                I am committed to delivering high-quality solutions tailored to
                each client's needs.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                to="/about"
                className="w-full md:w-48 flex justify-center items-center gap-2 py-3 px-6 rounded hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white text-base font-semibold font-main text-[#A53DFF] border border-[#A53DFF]"
              >
                <FaUser className="text-xl" /> About Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="w-full md:w-48 flex justify-center items-center gap-2 py-3 px-6 rounded hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white text-base font-semibold font-main text-[#A53DFF] border border-[#A53DFF]"
              >
                <LuDownload className="text-xl" /> Download CV
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>



            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default About