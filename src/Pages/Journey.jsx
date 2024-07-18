import React from "react";
import { motion } from "framer-motion";
import {
  FaRupeeSign,
  FaRegCheckCircle,
  FaArrowRight,
  FaClipboardCheck,
  FaRoute,
  FaRegLightbulb,
  FaInfoCircle,
} from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { FaHeartCirclePlus } from "react-icons/fa6";
import MouseTracker from "./MouseTracker";
import { Link } from "react-router-dom";

const Journey = () => {
  return (
    <div>
      <div className="bg-blue-100 py-20">
        <h1 className="text-center text-3xl  mx-96 rounded-xl  bg-gray-100 font-bold text-green-500  py-2">
          About BRO PG
        </h1>
        <nav className="bg-gray-100 pt-8 pb-4 mx-24 rounded-lg mt-2">
          <ul className="flex justify-around font-semibold text-green-500 text-2xl  ">
            <Link to="/choose">
              {" "}
              <FaClipboardCheck className="mr-2" />
              <li className="hover:text-green-700  ">Why Choose Us?</li>
            </Link>
            <Link to="/about">
              {" "}
              <FaInfoCircle className="mr-2" />
              <li className="hover:text-green-700">About</li>
            </Link>
            <Link to="/programs">
              <FaRegLightbulb className="mr-2" />
              <li className="hover:text-green-700">Programs</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="pt-20 min-h-screen bg-gradient-to-t from-blue-600 via-blue-500 to-blue-100">
        {/* <MouseTracker/> */}
        <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-40 py-12">
          <h1 className="font-bold text-gray-600 text-3xl md:text-5xl text-center md:mx-4">
            READY TO START
          </h1>
          <h1 className="font-bold text-gray-800 text-3xl md:text-5xl text-center md:mx-4">
            YOUR JOURNEY
          </h1>
          <h1 className="font-bold text-gray-600 text-3xl md:text-5xl text-center md:mx-4">
            WITH US
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around md:mx-20 lg:mx-72 pb-8">
          {/* First box */}
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <div className="bg-gray-800 mt-10 md:mt-20 mb-8 p-6 rounded-lg">
              <FaHeartCirclePlus className="text-green-500 mb-4 w-10 h-10" />
              <h4 className="text-white font-semibold mb-2">BASIC PLAN</h4>
              <div className="flex items-center mb-4">
                <FaRupeeSign className="text-white w-10 h-10" />
                <h1 className="text-white font-bold text-4xl ml-2">10,500</h1>
              </div>
              <ul className="mb-4">
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>1 Month Plan</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>Double Sharing Room</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>Food, Electricity included</span>
                </li>
              </ul>
              <p className="text-white flex items-center mb-4">
                See more benefits
                <FaArrowRight className="ml-1" />
              </p>
              <button className="bg-slate-100 text-green-800 rounded-xl px-10 py-1 font-bold">
                Join now
              </button>
            </div>
          </motion.div>

          <motion.div className="" whileHover={{ scale: 1.2 }}>
            <div className="bg-gradient-to-t from-green-700 to-green-600 mt-12 md:mt-20 p-4  rounded-lg shadow-lg">
              <LuCrown className="text-white mb-4 w-10 h-10" />
              <h4 className="text-white font-semibold mb-2">PREMIUM PLAN</h4>
              <div className="flex items-center mb-4">
                <FaRupeeSign className="text-white w-14 h-14" />
                <h1 className="text-white font-bold text-6xl mx-auto">
                  55,000
                </h1>
              </div>
              <ul className="mb-4">
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>6 Month Plan</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>FDouble Sharing Room</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>With no Above Charges</span>
                </li>
              </ul>
              <p className="text-white flex items-center mb-4">
                See more benefits
                <FaArrowRight className="ml-1" />
              </p>
              <button className="bg-white text-green-800 rounded-xl mb-20 px-10 py-1 font-bold">
                Join now
              </button>
            </div>
          </motion.div>

          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <div className="bg-gray-800 mt-10 md:mt-20 mb-8 p-6 rounded-lg">
              <CgGym className="text-green-500 mb-4 w-10 h-10" />
              <h4 className="text-white font-semibold mb-2">PRO PLAN</h4>
              <div className="flex items-center mb-4">
                <FaRupeeSign className="text-white w-10 h-10" />
                <h1 className="text-white font-bold text-4xl ml-2">90,000</h1>
              </div>
              <ul className="mb-4">
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>12 Month Plan</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>Double Sharing Room</span>
                </li>
                <li className="text-white flex items-center mb-2">
                  <FaRegCheckCircle className="w-6 h-6 mr-2" />
                  <span>No Other Bills</span>
                </li>
              </ul>
              <p className="text-white flex items-center mb-4">
                See more benefits
                <FaArrowRight className="ml-1" />
              </p>
              <button className="bg-slate-100 text-green-800 rounded-xl px-10 py-1 font-bold">
                Join now
              </button>
            </div>
          </motion.div>

          {/* Second box */}

          {/* Third box */}
        </div>
      </div>
    </div>
  );
};

export default Journey;
