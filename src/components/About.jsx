import React from "react";
import CommonHead from "./common/CommonHead";
import banner4 from "../assets/images/banner4.png";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CommonHead
            commonh2={"About Me"}
            commonp={
              "Professional Web Developer & UI/UX Designer | Video Editing Enthusiast"
            }
          />
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 pt-12">
            <div className="w-full lg:w-[400px] h-[350px] lg:h-[400px] relative rounded-t-[180px] lg:rounded-t-[261px] bg-white shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.3)] flex items-end justify-center overflow-hidden mb-8 lg:mb-0">
              <img
                className="w-[80%] max-h-[320px] object-contain drop-shadow-lg"
                src={banner4}
                alt="Professional portrait of the developer"
              />
            </div>
            <div className="w-full lg:w-[580px] text-start">
              <p className="text-base md:text-lg font-medium font-lato text-gray-800 leading-relaxed">
                I am a dedicated Web Developer and UI/UX Designer based in
                Gazipur, Bangladesh, with proven expertise in HTML, CSS,
                JavaScript, React.js, Node.js, Bootstrap, and Figma. I
                specialize in delivering end-to-end website solutions—from
                concept and design to deployment—ensuring every project meets
                the highest standards of quality and performance.
                <br />
                <br />
                My frontend skills include building responsive, accessible, and
                visually appealing interfaces using React, Bootstrap, and
                Tailwind CSS. I craft professional UI layouts in Figma and
                translate them into pixel-perfect, production-ready code. On the
                backend, I integrate robust features with Node.js, including
                RESTful APIs and database connectivity.
                <br />
                <br />
                My portfolio spans personal websites, business platforms,
                e-commerce solutions, product galleries, authentication systems,
                and admin dashboards. I am committed to clean code practices,
                performance optimization, and modern design principles.
                Continuous learning and staying updated with the latest
                technologies drive my work.
                <br />
                <br />
                My mission is to deliver fast, modern, and fully functional
                websites that provide exceptional user experiences. I value
                clear communication, reliability, and exceeding client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
