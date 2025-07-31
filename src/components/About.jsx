import React from "react";
import CommonHead from "./common/CommonHead";
import banner4 from '../assets/images/banner4.png'

const About = () => {
  return (
    <>
      <section id="about" className="">
        <div className="container">
          <CommonHead
            commonh2={"About Me"}
            commonp={
              "User Interface and User Experience and Also video editing "
            }
          />
          <div className="flex justify-evenly pt-[153px] items-center">
            <div className="w-[400px] h-[400px] relative rounded-t-[261px] bg-white shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)]">
              <img className=" absolute top-[-266px] left-0" src={banner4} alt="about-img" />
            </div>
            <div className="w-[580px] text-start">
              <p className="text-[18px] font-medium font-lato text-black">
                I am a passionate and skilled Web Developer from Gazipur,
                Bangladesh, with hands-on experience in HTML, CSS, JavaScript,
                React.js, Node.js, Bootstrap, and Figma. I offer full website
                creation services—from design to deployment—tailored to client
                needs and industry standards. On the frontend, I work with
                React, Bootstrap, and Tailwind CSS to build responsive, clean,
                and user-friendly web interfaces. I design professional UI
                layouts in Figma and convert them into pixel-perfect,
                production-ready code. I also integrate backend features using
                Node.js, including REST APIs and database connectivity. I’ve
                developed a wide range of projects such as personal portfolios,
                business websites, e-commerce platforms, product galleries, user
                authentication systems, and admin dashboards. My approach
                combines clean code practices, performance optimization, and
                modern design principles. I stay updated with new technologies
                and continuously work to improve my skills. My goal is to
                deliver fast, modern, and fully functional websites that not
                only work great but also provide a pleasant user experience. I
                believe in clear communication, consistent learning, and
                delivering results that clients love.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
