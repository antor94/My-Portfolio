import React from "react";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
import { SiBasicattentiontoken } from "react-icons/si";
import banner5 from "../assets/images/banner5.png";
import { useRef } from 'react';
import PixelTransition from "./PixelTransition";

const About = () => {

  return (
    <>
      {/* --------- profile-part */}
      <section id="about" className="bg-[#101010] min-h-screen   relative">
        <div className="container">
          <div className="pt-[70px] text-center">
            <CommonHead commonp={"Get to know me"} commonh2={"About Me"} />
          </div>
          <div id="about-row">
            {/* <!--   Start Code --> */}
            <div class="wrap">
              <div class="animated-bar"></div>
            </div>
            {/* ---------------- cross button */}
            <div className=" absolute top-4 right-4 lg:top-[30px] lg:right-[60px]">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>

            <div>
              {/* ---------- images part */}
              <div className=" lg:flex mx-auto lg:mx-0 justify-center gap-[100px] items-center mt-[50px]  lg:mt-[180px]">
                {/* ------------ left-side */}


<PixelTransition
  firstContent={
    <img src={banner5} alt="default pixel transition content, a cat!" style={{ width: "400px", height: "620px", margin:" -226px", objectFit: "cover"  }}/>
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Antor</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>

                {/* ----------- right-side */}
                <div className=" pt-[100px]">
                  <div className="">
                    <p className=" pl-[30px] lg:pl-0 text-[18px] mx-auto lg:text-[24px] font-medium font-main text-[#009e66]">
                      Who am i?
                    </p>
                    <div className=" text-center lg:text-start  lg:w-[690px] my-[20px]">
                      <h2 className="text-[31px]  font-bold font-main text-[#F0F0F0]">
                        I'm Antor, a Frontend Web Developer
                      </h2>
                    </div>
                    <div className= " mx-[20px] lg:mx-0 lg:w-[667px] border-b border-[#9f9f9f22] pb-[40px]">
                      <p className="text-[15px] font-normal font-main text-[#9F9F9F]">Currently honing my skills at Creative IT Institute. I  specialize in building dynamic and responsive front end applications using React, JavaScript, HTML, and CSS. I  also have hands-on experience with Git/GitHub and UI design tools lFigma and Adobe.My focus is on writing clean, maintainable code and crafting seamless user experiences.</p>
                    </div>
                  </div>
                  {/* ------------ address part */}
                  <address>
                    <div className="pt-[30px] pb-[40px]">
                      <div className=" pl-[30px] lg:pl-0  gap-[40px] lg:flex  lg:gap-[180px]">
                        <div className=" flex gap-[10px]">
                          <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                            Name:
                          </h3>
                          <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                            Antor
                          </p>
                        </div>
                        <div className="pt-[30px] lg:pt-0 flex  gap-[10px]">
                          <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                            Email:
                          </h3>
                          <a
                            href=""
                            className="text-[15px] font-normal font-main text-[#9F9F9F]"
                          >
                            antorremeni@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className=" pl-[30px] lg:pl-0 lg:flex gap-[221px] pt-[20px]">
                        <div className="flex gap-[10px]">
                          <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                            Age:
                          </h3>
                          <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                            21
                          </p>
                        </div>
                        <div className="pt-[30px] lg:pl-0 flex gap-[10px]">
                          <h3 className="text-[15px] font-normal font-main text-[#DADADA]">
                            From:
                          </h3>
                          <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                            Dhaka, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </address>
                  {/* -------------- button */}
                  <div className="mt-[20px] text-center lg:text-start">
                    <a
                      href="/cv.pdf"
                      download
                      className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------- service-part */}
            <div className=" pt-[100px] text-center lg:pt-[180px] lg:pb-[50px]">
              <div className="pb-[40px]">
                <CommonHead
                  commonh2={"Choose a Plan"}
                  commonp={"Get started with my services"}
                />
              </div>
              <div id="about2-row" className="   lg:flex justify-center items-center gap-[60px]">




                <div className="text-center flex justify-center">
                <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
                  <div className="flex justify-center pt-[50px] pb-[30px]">
                    <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
                  </div>
                  <div className="mb-[30px]">
                    <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                      Standard
                    </h3>
                    <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                      $19/month
                    </h2>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[20px]">
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Mobile App Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Responsive Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Database Development
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Web Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        24/7 Support
                      </li>
                    </ul>
                  </div>

                  {/* -------------- button */}
                  <div className="mt-[50px]">
                    <a
                      href="/cv.pdf"
                      download
                      className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                    >
                      Get Standard
                    </a>
                  </div>
                </div>
                </div>


                  <div className="text-center py-[50px] lg:py-0 flex justify-center">
                <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
                  <div className="flex justify-center pt-[50px] pb-[30px]">
                    <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
                  </div>
                  <div className="mb-[30px]">
                    <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                      Standard
                    </h3>
                    <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                      $19/month
                    </h2>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[20px]">
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Mobile App Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Responsive Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Database Development
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Web Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        24/7 Support
                      </li>
                    </ul>
                  </div>

                  {/* -------------- button */}
                  <div className="mt-[50px]">
                    <a
                      href="/cv.pdf"
                      download
                      className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                    >
                      Get Standard
                    </a>
                  </div>
                </div>
                </div>

                  <div className="text-center flex justify-center">
                <div className=" w-[340px] lg:w-[390px] h-[600px] text-center bg-[#161616]">
                  <div className="flex justify-center pt-[50px] pb-[30px]">
                    <SiBasicattentiontoken className="text-[#009e66] text-[80px]" />
                  </div>
                  <div className="mb-[30px]">
                    <h3 className="text-[26px] font-bold font-main text-[#F0F0F0]">
                      Standard
                    </h3>
                    <h2 className="text-[24px] pt-[10px] font-light font-main text-[#F0F0F0]">
                      $19/month
                    </h2>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[20px]">
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Mobile App Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Responsive Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Database Development
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        Web Design
                      </li>
                      <li className="text-[14px] font-normal font-main text-[#9F9F9F]">
                        24/7 Support
                      </li>
                    </ul>
                  </div>

                  {/* -------------- button */}
                  <div className="mt-[50px]">
                    <a
                      href="/cv.pdf"
                      download
                      className=" py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border "
                    >
                      Get Standard
                    </a>
                  </div>
                </div>
                </div>
                







              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
