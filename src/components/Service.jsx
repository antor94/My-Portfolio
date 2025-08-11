import React from "react";
import CommonHead from "./common/CommonHead";
import { MdOutlineWeb } from "react-icons/md";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoPulseOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const services = [
  {
    icon: <MdOutlineWeb className="text-5xl text-[#FD6F00]" />,
    title: "Responsive Web Design",
    desc: "Design websites that work seamlessly across mobile, tablet, and desktop using HTML, CSS, and media queries.",
  },
  {
    icon: <FaFigma className="text-5xl text-[#FD6F00]" />,
    title: "UI/UX Implementation",
    desc: "Convert Figma/Adobe designs into interactive user interfaces with smooth animations and usability focus.",
  },
  {
    icon: <FaReact className="text-5xl text-[#FD6F00]" />,
    title: "Single Page Application (SPA) Development",
    desc: "Build dynamic apps using React, Vue, or Angular where content loads without refreshing the page.",
  },
  {
    icon: <SiGooglemarketingplatform className="text-5xl text-[#FD6F00]" />,
    title: "Landing Page Development",
    desc: "Create fast, optimized, and conversion-focused pages for marketing, sales, or product showcases.",
  },
  {
    icon: <IoPulseOutline className="text-5xl text-[#FD6F00]" />,
    title: "Frontend Performance Optimization",
    desc: "Improve loading speed, reduce bundle size, and ensure SEO, accessibility, and cross-browser support.",
  },
  {
    icon: <MdSpaceDashboard className="text-5xl text-[#FD6F00]" />,
    title: "Dashboard & Admin Panel UI",
    desc: "Build interactive dashboards with charts, filters, and data tables using libraries like Chart.js, D3.js, and Tailwind UI.",
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-[#F0F1F3] py-32">
      <div className="container mx-auto px-4">
        <CommonHead
          commonh2="Services"
          commonp="I offer a range of professional web development and UI/UX services to help your business grow."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-8 text-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-xl font-bold font-lato text-[#FD6F00] mb-4">
                {service.title}
              </h2>
              <p className="text-base font-medium font-lato text-[#575757]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
