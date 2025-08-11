import React from "react";
import CommonHead from "./common/CommonHead";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTelegram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <CommonHead
          commonh2="Contact me"
          commonp="Cultivating Connections: Reach Out and Connect with Me"
        />
        <div className="pt-10 flex flex-col lg:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold font-poppins text-second mb-8">
              Get in touch with me
            </h2>
            <div className="mb-8">
              <h3 className="text-base font-semibold font-poppins text-second">
                Address
              </h3>
              <p className="text-sm font-normal font-poppins text-second">
                245 / I bazar-road, Bilaspur Gazipur Dhaka Bangladesh
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-base font-semibold font-poppins text-second">
                Email
              </h3>
              <p className="text-sm font-normal font-poppins text-second">
                antorremeni@gmail.com
              </p>
              <p className="text-sm font-normal font-poppins text-second">
                antorjoy47@gmail.com
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-base font-semibold font-poppins text-second">
                Phone
              </h3>
              <p className="text-sm font-normal font-poppins text-second">
                +880-017-687-80954
              </p>
              <p className="text-sm font-normal font-poppins text-second">
                +880-017-452-85096
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold font-poppins text-second mb-2">
                Socials
              </h3>
              <div className="flex gap-4">
                <Link
                  className="text-[#4676ED] hover:scale-110 transition-transform"
                  to="#"
                >
                  <FaFacebook size={30} />
                </Link>
                <Link
                  className="text-[#DA0000] hover:scale-110 transition-transform"
                  to="#"
                >
                  <FaYoutube size={30} />
                </Link>
                <Link
                  className="text-[#38B0E3] hover:scale-110 transition-transform"
                  to="#"
                >
                  <FaTelegram size={30} />
                </Link>
                <Link
                  className="text-[#5A99EC] hover:scale-110 transition-transform"
                  to="#"
                >
                  <FaTwitterSquare size={30} />
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label className="block text-base font-semibold font-poppins text-second mb-2">
                  Full name
                </label>
                <input
                  className="w-full h-12 border border-[#E5E7EB] pl-5 rounded-xl outline-none mb-2"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-base font-semibold font-poppins text-second mb-2">
                  Email address
                </label>
                <input
                  className="w-full h-12 border border-[#E5E7EB] pl-5 rounded-xl outline-none mb-2"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-base font-semibold font-poppins text-second mb-2">
                  Message
                </label>
                <textarea
                  className="w-full h-32 border border-[#E5E7EB] pl-5 pt-4 rounded-xl outline-none resize-none mb-2"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full lg:w-48 h-12 bg-[#FD6F00] rounded-full text-base font-medium font-poppins text-white hover:bg-[#A53DFF] hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
