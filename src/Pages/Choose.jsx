import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import MouseTracker from './MouseTracker';
import { FaClipboardCheck, FaInfoCircle, FaRegLightbulb, FaRoute } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <div>
      <div className="bg-blue-100 py-20"><h1 className="text-center text-3xl  mx-96 rounded-xl  bg-gray-100 font-bold text-green-500  py-2">About BRO PG</h1>
      <nav className="bg-gray-100 pt-8 pb-4 mx-24 rounded-lg mt-2"><ul className="flex justify-around font-semibold text-green-500 text-2xl  "><Link to='/about' > <FaInfoCircle className="mr-2" /><li className="hover:text-green-700  ">About</li>
      </Link>
      <Link to='/journey'> <FaRoute className="mr-2" /><li className="hover:text-green-700">Journey</li></Link>
      <Link to='/programs'><FaRegLightbulb className="mr-2" /><li className="hover:text-green-700">Programs</li></Link></ul></nav></div>

    
    <div className='w-full bg-gradient-to-b from-blue-100 via-white to-blue-100 min-h-screen p-4 sm:p-8 md:p-16 lg:p-32'>
      {/* <MouseTracker/> */}

      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-12'>
        <div className='flex justify-center lg:justify-start'>
          <img className='w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mt-8 lg:ml-40 rounded-lg shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwl-Bd6i1Zd-YYQSwMaLN2tb5Qxd7JYeA6_6-ZYsEWBh-7jci3XpJ7hhjoW53UwBd6iY&usqp=CAU" alt="ApartmentImage" />
        </div>

        <div className='text-center lg:text-left'>
          <h5 className='font-bold text-sm text-blue-700 my-6'>SOME REASONS</h5>
          <div className='flex justify-center lg:justify-start font-bold text-3xl sm:text-4xl gap-2 text-blue-900 my-4'>
            <h1>WHY</h1>
            <h1>CHOOSE US?</h1>
          </div>

          <div>
            <ul>
              <li className='flex items-center justify-center lg:justify-start my-2'>
                <IoMdCheckmarkCircleOutline className='w-8 h-8 sm:w-10 sm:h-10 text-green-500' />
                <h4 className='font-semibold text-blue-900 mt-1 ml-2 text-lg'>OVER 100+ EXPERIENCED WORKERS</h4>
              </li>
              <li className='flex items-center justify-center lg:justify-start my-2'>
                <IoMdCheckmarkCircleOutline className='w-8 h-8 sm:w-10 sm:h-10 text-green-500' />
                <h4 className='font-semibold text-blue-900 mt-1 ml-2 text-lg'>LIVE SMARTER AND COMFORTABLE</h4>
              </li>
              <li className='flex items-center justify-center lg:justify-start my-2'>
                <IoMdCheckmarkCircleOutline className='w-8 h-8 sm:w-10 sm:h-10 text-green-500' />
                <h4 className='font-semibold text-blue-900 mt-1 ml-2 text-lg'>ONLY 1-TIME RENT AS SECURITY</h4>
              </li>
              <li className='flex items-center justify-center lg:justify-start my-2'>
                <IoMdCheckmarkCircleOutline className='w-8 h-8 sm:w-10 sm:h-10 text-green-500' />
                <h4 className='font-semibold text-blue-900 mt-1 ml-2 text-lg'>STUDENT STUDY ATMOSPHERE</h4>
              </li>
            </ul>

            <div>
              <h6 className='text-blue-600 flex justify-center lg:justify-start mt-6 font-semibold'>OUR PARTNERS</h6>
              <div className='flex justify-center lg:justify-start gap-8 py-2 my-2'>
                <IoLogoApple className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-700' />
                <IoLogoFacebook className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-600' />
                <IoLogoGithub className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-900' />
              </div>
            </div>
          </div>

        </div>
        
      </div></div>
      

    </div>
  );
}

export default Choose;
