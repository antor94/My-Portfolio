import React from "react";
import { Link } from "react-router";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import PortfolioCommon from "../components/common/PortfolioCommon";

const Portfolio = () => {






return (


  <>

<section id="portfolio" className="bg-[#101010] min-h-screen pb-[50px] relative">
  <div className="container ">
    <div className='pt-[70px] text-center'>
      <CommonHead commonp={'Showcasing some of my best work'} commonh2={'Portfolio'} />
    </div>
    {/*
    <!--   Start Code --> */}
    <div class="wrap">
      <div class="animated-bar"></div>
    </div>
    <div id="portfolio-row" className="grid grid-cols-3 gap-8 pt-[150px]">
      {/* ---------------- cross button */}
      <div className=' absolute top-[30px] right-[60px]'>
        <Link to={'/'}>
        <RxCross1 className='text-[30px] text-white' />
        </Link>
      </div>


      
      {/* ------------ common-portfolio */}
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />
      <PortfolioCommon portH2={'Landing page (single page website)'} portLink='/https://github.com/antor94/silicon3.git'
        portSrc='/public/Video/portfolio1.mp4' />


    </div>
        <div className="flex justify-center ">
      <Link to="/"
        className="w-60 px-4 py-4 mt-[30px] flex justify-center bg-[#FD6F00] text-base font-semibold font-main text-white hover:bg-[#A53DFF] rounded-lg transition-colors">
      More Projects </Link>
    </div>

  </div>
</section>
  </>
);
};

export default Portfolio;