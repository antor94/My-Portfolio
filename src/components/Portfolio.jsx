import React from "react";
import CommonHead from "./common/CommonHead";
import { Link } from "react-router";

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
    <section className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <CommonHead commonh2="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#959595] rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-64 bg-[#C6C6C6] flex items-center justify-center">
                {project.type === "video" ? (
                  <video
                    className="w-full h-full object-cover"
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
        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="w-60 px-4 py-4 bg-[#FD6F00] text-base font-semibold font-main text-white hover:bg-[#A53DFF] rounded-lg transition-colors"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
