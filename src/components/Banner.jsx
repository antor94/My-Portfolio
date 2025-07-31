import React from 'react'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import banner4 from '../assets/images/banner4.png'
// import banner2 from '../assets/images/banner2.png'
 
const Banner = () => {
  return (
    <>
    
    <section className='pt-[126px] pb-[900px]  bg-linear-to-r from-[#fff] to-[#f5dcfb] relative'>
        <div className="container">
            <div className="div flex justify-between items-center">
                <div className=''>
                    <h2 className='text-[24px] font-semibold font-lato text-[#707070]'>Hi I am</h2>
                    <h2 className='text-[28px] font-bold font-lato text-[#959595]'>Antor Karmaker</h2>

                    <h1 className='text-[70px] font-semibold font-lato  bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent '>React Developer</h1>

      
                    <button className='w-[126px] py-[12px]  px-[24px] bg-[#FD6F00] hover:bg-[#A53DFF] duration-[.3s] rounded-[4px] text-[16px] font-semibold font-main text-[#fff]'>Hire Me !</button>




                    <div className='w-[600px] mt-[80px]  bg-[#EDD8FF] flex text-center rounded-[8px] justify-between'>
                        <div className='w-full py-[17px]'> 
                            <h2 className='text-[32px] font-semibold font-main text-[#424E60]'>2 Y.</h2>
                            <p className='text-[16px] font-normal font-main text-[#697484]'>Experience</p>
                        </div>
                            <div className='w-full py-[17px] border-l-2 border-[#FFFFFF]'>
                            <h2 className='text-[32px] font-semibold font-main text-[#424E60]'>20+</h2>
                            <p className='text-[16px] font-normal font-main text-[#697484]'>Project done</p>
                        </div>

                           <div className='w-full py-[17px] border-l-2 border-[#FFFFFF]'>
                            <h2 className='text-[32px] font-semibold font-main text-[#424E60]'>80+</h2>
                            <p className='text-[16px] font-normal font-main text-[#697484]'>Happy Clients</p>
                        </div>
                    </div>





                </div>
                    <div className='w-[400px] h-[550px] relative rounded-[25px] bg-[#fff]'>
                        <img  className='w-[500px] absolute top-[-1px] left-[-12px]' src={banner3} alt="" />

                    </div>


            </div>
            <div className=' relative'>


                    <div className='w-[1300px] h-[728px]  absolute top-[372px] left-[123px]  flex justify-around items-center   rounded-[16px] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>
                        <div className='w-[424px] bg-[#F0F1F3]  rounded-[10px] h-[468px] overflow-hidden'> <img className='w-full ' src={banner2} alt="img" /></div>
                        <div>
                            <h2 className='w-[536px] text-[38px] font-semibold font-main text-[#132238] '>I am Professional User Experience Designer</h2>
                            <div className='py-[32px]'>

                            <p className='w-[536px] text-[18px] font-normal font-main text-[#556070]'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                            <p className='w-[536px] text-[18px] font-normal font-main text-[#556070]'>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>

                            </div>
                            <div className='flex gap-[20px]'>

                            <button className='w-[190px] flex justify-center items-center gap-[10px] py-[12px] px-[24px] rounded-[4px] hover:bg-[#A53DFF] duration-[.3s] hover:text-[#fff] text-[16px] font-semibold font-main text-[#A53DFF] border border-[#A53DFF]'> <FaUser  className='text-[24px]'/> About Me</button>

                            <button className='w-[190px] flex justify-center items-center gap-[10px] py-[12px] px-[24px] rounded-[4px] hover:bg-[#A53DFF] duration-[.3s] hover:text-[#fff] text-[16px] font-semibold font-main text-[#A53DFF] border border-[#A53DFF]'> <LuDownload  className='text-[24px]'/> Download CV</button>
                            </div>

                        </div>
                       <div  className=' absolute top-[552px] left-[182px]  flex gap-[20px] py-[30px] items-center'>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaFacebook /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaInstagram /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaLinkedinIn /></Link>
                        <Link className='w-[30px] h-[30px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full' to={'/'}><FaTwitter /></Link>
                    </div>
                        

            </div>
            </div>


        </div>

    </section>
        

    
    
    
    </>
  )
}

export default Banner