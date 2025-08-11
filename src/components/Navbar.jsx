import React, { useState } from "react";
import logo from "../assets/images/remeni logo.png";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-24 h-auto" src={logo} alt="my-logo" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link
              to="/"
              className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
            >
              Services
            </Link>
          </li>
        </ul>
        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="py-3 px-6 rounded bg-[#FD6F00] hover:bg-[#A53DFF] text-base font-semibold font-main text-white transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-[#FD6F00] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 items-center py-6">
            <li>
              <Link
                to="/"
                className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-bold font-lato text-[#333] hover:text-[#FD6F00] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="w-full block py-3 px-6 rounded bg-[#FD6F00] hover:bg-[#A53DFF] text-base font-semibold font-main text-white text-center transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
