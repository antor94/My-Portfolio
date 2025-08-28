import React from "react";

import { MdOutlineWeb } from "react-icons/md";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoPulseOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";

const services = [
  {
    icon: <MdOutlineWeb className="text-5xl text-[#009e66]" />,
    title: "Responsive Web Design",
    desc: "Design websites that work seamlessly across mobile, tablet, and desktop using HTML, CSS, and media queries.",
  },
  {
    icon: <FaFigma className="text-5xl text-[#009e66]" />,
    title: "UI/UX Implementation",
    desc: "Convert Figma/Adobe designs into interactive user interfaces with smooth animations and usability focus.",
  },
  {
    icon: <FaReact className="text-5xl text-[#009e66]" />,
    title: "Single Page Application (SPA) Development",
    desc: "Build dynamic apps using React, Vue, or Angular where content loads without refreshing the page.",
  },
  {
    icon: <SiGooglemarketingplatform className="text-5xl text-[#009e66]" />,
    title: "Landing Page Development",
    desc: "Create fast, optimized, and conversion-focused pages for marketing, sales, or product showcases.",
  },
  {
    icon: <IoPulseOutline className="text-5xl text-[#009e66]" />,
    title: "Frontend Performance Optimization",
    desc: "Improve loading speed, reduce bundle size, and ensure SEO, accessibility, and cross-browser support.",
  },
  {
    icon: <MdSpaceDashboard className="text-5xl text-[#009e66]" />,
    title: "Dashboard & Admin Panel UI",
    desc: "Build interactive dashboards with charts, filters, and data tables using libraries like Chart.js, D3.js, and Tailwind UI.",
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-[#101010] h-screen  relative">
      <div className="container">
            <div className='pt-[70px] text-center'><CommonHead commonp={'Services i offer to my clients'} commonh2={'My Services'}  /></div>
        <div id="service-row" className="mt-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                          {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>

{/* ---------------- cross button */}
                <div className=' absolute top-[30px] right-[60px]'><Link to={'/'} ><RxCross1 className='text-[30px] text-white' /></Link>  </div>






          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#161616] rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col  p-8 "
            >
              <div className="">{service.icon}</div>
              <div className="py-[20px]">
              <h2 className="text-[20px] font-medium font-main text-[#F3F3F3]">  {service.title} </h2>

              </div>
              <p className="text-[15px] mb-[17px] font-normal font-main text-[#9F9F9F]"> {service.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
