import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import banner3 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import SplitText from "./SplitText";
import TextType from "./TextType";

import SplashCursor from './SplashCursor'



import TargetCursor from './TargetCursor';

const Banner = () => {
  // ----------- aos animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
    <section
      id="banner"
      className="relative overflow-hidden  pt-[150px] h-screen bg-[#101010]"
    >
      {/* ----------- icons */}
      <div className="flex flex-col absolute top-[560px] right-[60px] gap-4  ">
        <a
          data-aos="fade-down"
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.facebook.com/antor.web.dev"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          data-aos="fade-left"
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.instagram.com/antor_web_dev/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          data-aos="fade-up"
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.linkedin.com/in/antor94/"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://github.com/antor94"
          aria-label="Github"
        >
          <TbBrandGithub />
        </a>
      </div>







<SplashCursor />







      <div className="container ">
        <div id="banner-row" className="flex justify-around items-center">
          {/*------------ Left Content */}
          <div className="flex flex-col">
            <SplitText
              data-aos="zoom-in"
              text=" Hi, I am"
              className="text-xl font-semibold font-lato text-[#707070]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <TextType
              className="  text-[70px] font-bold font-main text-[#F0F0F0]"
              data-aos="flip-left"
              text={["  Antor Karmaker"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />

            {/* ----------- card loading */}
            <div class="card">
              <div class="loader">
                <p className="text-[32px] font-normal font-main text-[#f0f0f0]">
                  I'm a
                </p>
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


          </div>
          {/* Right Image */}
          <div
            data-aos="zoom-out-left"
            className="w-[450px] h-[450px] flex justify-center items-center relative rounded-full bg-[#ffffffdf]  overflow-hidden"
          >
            <img
              data-aos="zoom-out-left"
              className=" "
              src={banner2}
              alt="Antor Karmaker portrait"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
