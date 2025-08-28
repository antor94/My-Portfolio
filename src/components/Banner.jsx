import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import banner3 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.png";

const Banner = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        attr: {
          d: `M0,160 C120,220 360,100 600,160 C840,220 1080,100 1280,160 L1280,320 L0,320 Z`,
        },
      });
    }
  }, []);

  return (
    <section id="banner" className="relative overflow-hidden h-[805px] pt-[150px] bg-[#101010]">
      <div className="container ">
        <div id="banner-row" className="flex justify-around items-center">
          {/*------------ Left Content */}een
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold font-lato text-[#707070]">   Hi, I am  </h2>
            <h2 className="text-[70px] font-bold font-main text-[#F0F0F0]">  Antor Karmaker </h2>
            {/* ----------- card loading */}
            <div class="card">
  <div class="loader">
    <p className="text-[32px] font-normal font-main text-[#f0f0f0]">I'm  a</p>
    <div class="words">
      <span class="word">React Developer</span>
      <span class="word">Frontend Developer</span>
      <span class="word">jr. Frontend Developer</span>
      <span class="word">React Expert</span>
      <span class="word">Javascript Expert</span>
    </div>
  </div>
           </div>
          {/* <!-- From Uiverse.io by Masoodaykhan -->  */}
          <button
            class="font-main flex gap-2 ml-0 mt-[65px]  mx-auto  text-lg text-gray-50 bg-[#009e66] hover:bg-transparent hover:border border-[#009e66] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-[#009e66] before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden  rounded-full group"
            type="submit">
          Hire me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              class="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-[#009e66] hover:text-white text-gray-50 ease-linear duration-300 rounded-full border border-[#009e66] group-hover:border-[#009e66] p-2 rotate-45"
            >
              <path
                class="fill-gray-800 group-hover:fill-white"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
          </div>
          {/* Right Image */}
            <div className="w-[450px] h-[450px] flex justify-center items-center relative rounded-full bg-[#ffffffdf]  overflow-hidden">
              <img className=" "  src={banner2} alt="Antor Karmaker portrait" />
            </div>
        </div>

      </div>
    </section>

  );
};

export default Banner;
