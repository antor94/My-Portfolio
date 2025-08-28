import React from "react";

import { Link } from "react-router";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";

const projects = [
  {
    id: 1,
    type: "video",
    title: "Video Project",
    src: "/Video/p-1.mp4",
    alt: "Portfolio video",
  },
  {
    id: 2,
    type: "image",
    title: "Image Project 1",
    src: "#",
    alt: "Portfolio image 1",
  },
  {
    id: 3,
    type: "image",
    title: "Image Project 2",
    src: "#",
    alt: "Portfolio image 2",
  },
  {
    id: 4,
    type: "image",
    title: "Image Project 3",
    src: "#",
    alt: "Portfolio image 3",
  },
  {
    id: 5,
    type: "image",
    title: "Image Project 4",
    src: "#",
    alt: "Portfolio image 4",
  },
  {
    id: 6,
    type: "image",
    title: "Image Project 5",
    src: "#",
    alt: "Portfolio image 5",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#101010] h-screen relative">
      <div className="container ">
      <div className='pt-[70px] text-center'><CommonHead commonp={'Showcasing some of my best work'} commonh2={'Portfolio'}  /></div>

        <div id="portfolio-row" className="grid grid-cols-3 gap-8 pt-[150px]">

               {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>

  {/* ---------------- cross button */}
                  <div className=' absolute top-[30px] right-[60px]'><Link to={'/'} ><RxCross1 className='text-[30px] text-white' /></Link>  </div>
  

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#959595] rounded-2xl  overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-64 bg-[#C6C6C6] flex items-center justify-center">
                {project.type === "video" ? (
                  <video
                    className=""
                    src={project.src}
                    type="video/mp4"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={project.src}
                    alt={project.alt}
                  />
                )}
              </div>
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-semibold font-lato text-white">
                  {project.title}
                </h2>
                <Link
                  to="/"
                  className="w-24 py-2 bg-[#A53DFF] text-base font-main font-medium text-white flex justify-center items-center rounded-lg hover:bg-[#FD6F00] transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <Link
            to="/"
            className="w-60 px-4 py-4 mt-[30px] flex justify-center bg-[#FD6F00] text-base font-semibold font-main text-white hover:bg-[#A53DFF] rounded-lg transition-colors"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
