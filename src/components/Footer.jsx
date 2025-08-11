import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/remeni logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2B384C] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to={'#'} className="flex-shrink-0 mb-4 md:mb-0">
            <img src={logo} alt="footer logo" className="w-20 h-auto" />
          </Link>
          {/* Navigation */}
          <ul className="flex flex-wrap gap-6 justify-center">
            <li>
              <Link
                to="/"
                className="text-lg font-bold font-lato text-white hover:text-[#FD6F00] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-lg font-bold font-lato text-white hover:text-[#FD6F00] transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-lg font-bold font-lato text-white hover:text-[#FD6F00] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-bold font-lato text-white hover:text-[#FD6F00] transition-colors"
              >
                Services
              </Link>
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#FD6F00] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#FD6F00] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#FD6F00] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#FD6F00] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Antor Karmoker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
