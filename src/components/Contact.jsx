import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import { FaFacebook, FaTelegram, FaTwitterSquare, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    
    <section className='py-[150px]'>
        <div className="container">
            <CommonHead commonh2={'Contact me'} commonp={'Cultivating Connections: Reach Out and Connect with Me'} />
   
              <div className=" pt-[40px] flex justify-around">


        

              <div className=" ">
              <div> <h2 className="text-[20px] lg:text-[24px] font-semibold font-poppins text-second mb-[32px] lg:mb-[40]"> Get in touch with me  </h2> </div>

                <div>
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second "> Address</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second "> 245 / I bazar-road, Bilaspur Gazipur Dhaka Bangladesh</p>
                </div>
                <div className="mt-[32px]">
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second ">Email</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second ">antorremeni@gmail.com</p>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second ">antorjoy47@gmail.com</p>
                </div>
                <div className="mt-[32px]">
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second ">Phone</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second ">+880-017-687-80954</p>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second ">+880-017-452-85096</p>
                </div>
                <div className="mt-[32px] hidden lg:block">
                  <h2 className="text-[16px] lg:text-[18px] font-semibold font-poppins text-second ">Socials</h2>
                  
                  <div className=" sm:hidden  lg:flex gap-[20px] mt-[8px]">  

                  <Link className="w-[24px] h-[24px] text-[#4676ED]"><FaFacebook className='text-[30px]' /></Link>
                  <Link className="w-[24px] h-[24px] text-[#DA0000]"><FaYoutube className='text-[30px]' /></Link>
                  <Link className="w-[24px] h-[24px] text-[#38B0E3]" ><FaTelegram className='text-[30px]' /></Link>
                  <Link className="w-[24px] h-[24px] text-[#5A99EC]"><FaTwitterSquare className='text-[30px]' /> </Link>
                  </div>
                  
                </div>
                <div>


              </div>
                 </div>

                 <div>

                                <div>
                    <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second ">Full name</h2>
                    <input className=" lg:w-[600px] h-[43px] mt-[8px] border border-[#E5E7EB]  pl-[20px] rounded-[12px] outline-none mb-[24px]" type="text" />
                </div>
                                <div>
                    <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second ">Email address</h2>
                    <input className=" lg:w-[600px] h-[43px] mt-[8px] border border-[#E5E7EB] pl-[20px] rounded-[12px] outline-none mb-[24px]" type="email" />
                </div>
         <div>
  <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second">Message</h2>
  <textarea
    className="lg:w-[600px] h-[132px] lg:h-[128px] mt-[8px] border pl-[20px] pt-[16px] border-[#E5E7EB] rounded-[12px] outline-none mb-[24px] resize-none"
  ></textarea>
</div>
                <button className="w-full  lg:w-[182px] h-[40px] lg:h-[52px] bg-second rounded-full text-[14px] lg:text-[16px] font-medium font-poppins  text-white bg-[#FD6F00] hover:bg-[#A53DFF] hover:scale-[1.1] duration-[.3s]">Send Message</button>
                    </div>

                      </div>
             

         
           
        </div>
    </section>
    
    
    </>
  )
}

export default Contact