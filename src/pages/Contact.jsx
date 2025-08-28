import React from "react";
import CommonHead from "../components/common/CommonHead";
import { Link } from "react-router";
import {  FaFacebook,  FaTelegram,  FaTwitterSquare,  FaYoutube,} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className=" bg-[#101010] h-screen relative">
      <div className="container ">
      <div className='pt-[70px] text-center'><CommonHead commonp={'Feel free to contact me anytimes'} commonh2={'Get in Touch'}  /></div>
      <div id="contact-row" className="pt-[150px] flex justify-center">

     {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>

{/* ---------------- cross button */}
                <div className=' absolute top-[30px] right-[60px]'><Link to={'/'} ><RxCross1 className='text-[30px] text-white' /></Link>  </div>

       {/*------------- Contact Form */}
          <div className=" ">
            <h2 className="text-[24px] font-medium font-main text-[#F0F0F0]">Message Me</h2>
            <div className="pt-[20px]">
            <form className="space-y-6">

              <div className="flex items-center">
              <div className="w-[400px]">
                <input
                  className="w-[90%] h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                  type="text"
                  placeholder="Your Name"
                />
              </div>
                      <div className="w-[400px]">
                <input
                  className="w-[90%] h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                  type="email"
                  placeholder="Email"
                />
              </div>
              </div>

{/* ------------ subject */}
                   <div className="w-[846px]">
                <input
                  className="w-[90%] h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                  type="text"
                  placeholder="Subject"
                />
              </div>

{/* --------------text-area */}
              <div className="w-[700px]">    
                <textarea
                  className="w-[760px] h-32 border bg-[#161616] text-[15px] font-normal font-main text-[#777777] border-none pl-5 pt-4  outline-none  mb-2"
                  placeholder="Your Message"
                ></textarea>
              </div>

{/* ---------------button */}

                 <button  className=" py-[10px] px-[35px]   hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border ">Submit</button> 
            </form>
            </div>
          </div>
          {/*------------------- Contact Info */}
          <div className="">
            <h2 className="text-[24px] font-medium font-main text-[#F0F0F0]"> Contact Info </h2>
            <div className="w-[430px] py-[30px]"> <p className="text-[15px] font-normal font-main text-[#9F9F9F]">Always available for freelance work if the right project comes along, Feel free to contact me!</p> </div>

   {/* -------------- contact details */}

          <div className=" flex flex-col gap-[20px]">

            <div className=" flex items-center gap-[40px]">
              <div><FaUserCircle className="text-[#009e66] text-[30px]" /></div>
              <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">   Name </h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]"> Emma Smith</p>
              </div>
            </div>

            <div className=" flex items-center gap-[40px]">
              <div><FaMapLocationDot  className="text-[#009e66] text-[30px]" /></div>
              <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">Location </h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]">4155 Mann Island, Liverpool, United Kingdom.</p>
              </div>
            </div>

              <div className=" flex items-center gap-[40px]">
              <div><FaPhone className="text-[#009e66] text-[30px]" /></div>
              <div>
              <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">Call Me</h3>
              <p className="text-[14px] font-normal font-main text-[#9F9F9F]">+44 1632 967704</p>
              </div>
            </div>

            <div className=" flex items-center gap-[40px]">
              <div><IoPaperPlane className="text-[#009e66] text-[30px]" /></div>
              <div>
            <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">Email Me</h3>
              <a href="#" className="text-[14px] hover:text-[#797979] font-normal font-main text-[#9F9F9F]">emma@example.com</a>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
