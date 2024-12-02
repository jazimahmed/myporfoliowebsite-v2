import React from 'react';
import {  FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="mx-5 shadow-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 font-monospace">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold">MyPortfolio</h1>
            <p className="text-gray-400 mt-2">Building the future, one line of code at a time.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline hover:text-gray-300">About Me</a></li>
              <li><a href="#projects" className="hover:underline hover:text-gray-300">Projects</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:underline hover:text-gray-300">Contact</a></li>
              <li><a href="#portfolio" className="hover:underline hover:text-gray-300">Portfolio</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Social Media */}
          <div className="flex gap-4">
            <a href="mailto:mohamedjazim800@gmail.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <BiLogoGmail size={20} />
            </a>
            <a href="https://github.com/jazimahmed?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <IoLogoGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/m-m-jazim-ahmed-3053822a2/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
