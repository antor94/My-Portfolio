import React, { useEffect, useRef } from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import { Link } from "react-router";
import gsap from "gsap";


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
    <section className="relative overflow-hidden pt-24 pb-16 bg-white">
      {/* Animated SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1280 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="bannerGradient" x1="0" y1="0" x2="1280" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FD6F00" />
            <stop offset="0.5" stopColor="#A53DFF" />
            <stop offset="1" stopColor="#CA5900" />
          </linearGradient>
        </defs>
        <path
          ref={waveRef}
          d="M0,160 C320,80 960,240 1280,160 L1280,320 L0,320 Z"
          fill="url(#bannerGradient)"
          opacity="0.18"
        />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-xl font-semibold font-lato text-[#707070]">
              Hi, I am
            </h2>
            <h2 className="text-2xl font-bold font-lato text-[#959595]">
              Antor Karmaker
            </h2>
            <h1 className="text-4xl md:text-6xl font-semibold font-lato bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent mt-2 mb-6">
              React Developer
            </h1>
            <button className="w-36 py-3 px-6 bg-[#FD6F00] hover:bg-[#A53DFF] transition-colors duration-300 rounded text-base font-semibold font-main text-white mb-8">
              Hire Me!
            </button>
            <div className="w-full md:w-[600px] mt-8 bg-[#EDD8FF] flex flex-col md:flex-row text-center rounded-lg justify-between shadow-sm">
              <div className="flex-1 py-4">
                <h2 className="text-2xl font-semibold font-main text-[#424E60]">
                  2 Y.
                </h2>
                <p className="text-base font-normal font-main text-[#697484]">
                  Experience
                </p>
              </div>
              <div className="flex-1 py-4 border-t md:border-t-0 md:border-l-2 border-[#FFFFFF]">
                <h2 className="text-2xl font-semibold font-main text-[#424E60]">
                  20+
                </h2>
                <p className="text-base font-normal font-main text-[#697484]">
                  Projects Done
                </p>
              </div>
              <div className="flex-1 py-4 border-t md:border-t-0 md:border-l-2 border-[#FFFFFF]">
                <h2 className="text-2xl font-semibold font-main text-[#424E60]">
                  80+
                </h2>
                <p className="text-base font-normal font-main text-[#697484]">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="w-72 h-96 md:w-96 md:h-[550px] relative rounded-2xl bg-white shadow-lg flex items-end justify-center overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={banner3}
                alt="Antor Karmaker portrait"
              />
            </div>
          </div>
        </div>
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
    </section>

  );
};

export default Banner;
