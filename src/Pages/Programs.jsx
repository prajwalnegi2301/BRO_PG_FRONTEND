import React from 'react';
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { FaClipboardCheck, FaFire, FaInfoCircle, FaRegLightbulb, FaRoute } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import MouseTracker from './MouseTracker';


const Programs = () => {
  return (
    <div>
      <div className="bg-blue-100 py-20"><h1 className="text-center text-3xl  mx-96 rounded-xl  bg-gray-100 font-bold text-green-500  py-2">About BRO PG</h1>
      <nav className="bg-gray-100 pt-8 pb-4 mx-24 rounded-lg mt-2"><ul className="flex justify-around font-semibold text-green-500 text-2xl  ">
        <Link to='/choose' > <FaInfoCircle className="mr-2" /><li className="hover:text-green-700  ">Why Choose Us?</li>
      </Link>
      <Link to='/journey'> <FaRoute className="mr-2" /><li className="hover:text-green-700">Journey</li></Link>
      <Link to='/about'><FaRegLightbulb className="mr-2" /><li className="hover:text-green-700">About</li></Link></ul></nav></div>
    <div className='py-20 w-full bg-blue-100'>
        {/* <MouseTracker/> */}
      <div className='text-center text-3xl md:text-4xl   text-blue-800 gap-5 flex flex-col md:flex-row justify-around px-40'>
        <h1 className='mt-10 font-semibold italic hover:text-green-400 '>EXPLORE OUR</h1>
        <h1 className='mt-10  font-bold italic hover:text-green-500 '>FACILITIES</h1>
        <h1 className='mt-10 font-semibold italic hover:text-green-400 '>FOR YOU</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-16 px-4 md:px-16'>
        <div className='hover:bg-gradient-to-r from-green-400 to-green-500 flex flex-col items-center p-6 w-64 h-80 bg-white rounded-lg shadow-lg transition duration-300'>
          <CgGym className='text-blue-800 w-16 h-16 mb-4'/>
          <h4 className='text-blue-800 font-semibold mb-2 text-lg'>Fitness Center</h4>
          <p className='text-gray-800 mb-4 text-center'>Stay fit during your stay with our fully equipped fitness center.</p>
        </div>

        <div className='hover:bg-gradient-to-r from-green-400 to-green-500 flex flex-col items-center p-6 w-64 h-80 bg-white rounded-lg shadow-lg transition duration-300'>
          <MdSportsGymnastics className='text-blue-800 w-16 h-16 mb-4'/>
          <h4 className='text-blue-800 font-semibold mb-2 text-lg'>Yoga Classes</h4>
          <p className='text-gray-800 mb-4 text-center'>Relax and rejuvenate with our guided yoga sessions.</p>
        </div>

        <div className='hover:bg-gradient-to-r from-green-400 to-green-500 flex flex-col items-center p-6 w-64 h-80 bg-white rounded-lg shadow-lg transition duration-300'>
          <FaFire className='text-blue-800 w-16 h-16 mb-4'/>
          <h4 className='text-blue-800 font-semibold mb-2 text-lg'>Sauna</h4>
          <p className='text-gray-800 mb-4 text-center'>Unwind and detox in our state-of-the-art sauna.</p>
        </div>

        <div className='hover:bg-gradient-to-r from-green-400 to-green-500 flex flex-col items-center p-6 w-64 h-80 bg-white rounded-lg shadow-lg transition duration-300'>
          <FaHeartbeat className='text-blue-800 w-16 h-16 mb-4'/>
          <h4 className='text-blue-800 font-semibold mb-2 text-lg'>Wellness Programs</h4>
          <p className='text-gray-800 mb-4 text-center'>Holistic wellness programs tailored for your needs.</p>
        </div>
        
      </div>
      <div className='flex justify-center mt-16'><Link to="/profile" className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
      Visit Properties Now
      <FaArrowRight className="ml-2" />
    </Link></div>
      
      
      
    </div>
    </div>
  );
};

export default Programs;
