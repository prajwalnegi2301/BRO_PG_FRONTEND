import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pb-2 pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/Bro_PG_logo.png" // Placeholder logo, replace with actual source
            alt="BroPg Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm text-gray-400">© 2024 | All Rights Reserved</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
         
          <ul className="flex flex-col md:flex-row md:mr-12 mb-4 md:mb-0 space-y-2 md:space-y-0 md:space-x-8">
            <li><a href="#" className="hover:underline">T&C</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
           
          </ul>
         
        </div>
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" aria-label="Facebook" className="text-blue-400 hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-blue-400 hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram" className="text-blue-400 hover:text-blue-500">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs">
        Images shown are for representational purposes only. The depictions may or may not form a part of that individual property.
      </div>
    </footer>
  );
};

export default Footer;
