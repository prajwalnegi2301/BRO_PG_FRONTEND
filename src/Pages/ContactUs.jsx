import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiMail, TiPhone } from "react-icons/ti";
import MouseTracker from './MouseTracker';

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("Please enter your name.");
      return;
    }
    if (message.trim() === "") {
      toast.error("Please enter your message.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/v1/connect/createConnectMessage", { name, message }, { withCredentials: true });
      toast.success("Message sent successfully!");
      setName("");
      setMessage("");
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 pt-12 min-h-screen">
      {/* <MouseTracker/> */}
      <div className="container mx-auto pt-16 pb-10">
        <div className="flex flex-col lg:flex-row justify-around mx-10">
          <div className="text-center lg:text-left">
         
              
            <motion.div className="" whileHover={{ scale: 1.1 }}>
                {" "}
                <h1 className="text-slate-800 text-4xl mt-6 mb-4 font-semibold">
              WHAT THEY
            </h1>
               
              </motion.div>
            
            
            <motion.div className="" whileHover={{ scale: 1.2 }}>
                {" "}
                <h1 className="text-slate-800 text-6xl mb-10 font-bold">
              SAY ABOUT US
            </h1>
               
              </motion.div>
            <h4 className="text-slate-700 font-semibold text-lg mx-10 lg:mx-0 mt-4">
              BRO PG is amazing. 
            </h4>
            <h4 className="text-slate-700 font-semibold text-lg mx-10 lg:mx-0 mt-1">
              Amazing facilities, well-maintained rooms and great
              environment.
            </h4>
            <h4 className="text-slate-700 font-semibold text-lg mx-10 lg:mx-0 mt-1">
            Good service with friendly staff and super clean rooms.
            </h4>
          
            <div className="flex justify-center lg:justify-start">
              <h6 className="text-blue-800 font-semibold mt-4 text-lg">~Students</h6>
              <h6 className="text-gray-600 mt-4 ml-2 text-lg"> of BRO PG</h6>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="w-96 h-64 border border-green-700 mr-0 lg:mr-40"></div>
            <div className="absolute bg-gradient-to-r from-green-600 via-green-800 to-green-900 w-96 h-64 mt-6 mr-0 lg:mr-28"><div className="mx-1 my-0.5 ">

            <motion.div className="" whileHover={{ scale: 1.06 }}>
                {" "}
                <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6700546081925!2d77.03061801744384!3d28.609673499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0590ecebadd3%3A0x389a92a50fbe2b3d!2sBro%20PG!5e0!3m2!1sen!2sin!4v1718501071697!5m2!1sen!2sin" 
        width="376" 
        height="250" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
              </motion.div>
      
    </div></div>
          </div>
        </div>

        <div className="w-72 h-1 bg-green-500 mx-auto mt-16 rounded-2xl"></div>
        <div className="flex justify-center mt-4 text-slate-800 text-4xl font-semibold">
        <motion.div className="" whileHover={{ scale: 1.2 }}>
                {" "}
                <h1>READY TO STAY WITH US</h1>
               
              </motion.div>
          
        </div>
        <div className="h-1 w-full bg-slate-500 mt-16"></div>

        <motion.div className="" whileHover={{ scale: 1.4 }}>
                {" "}
                <h1 className="text-4xl text-slate-800 text-center font-bold mb-8 mt-16">
          Contact Us</h1>
               
              </motion.div>

        
        <ToastContainer position="top-center" />
        <div className='px-4 lg:px-24'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-800 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-slate-800 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 hover:text-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-12"
            >
              Submit
            </button>
          </form>
        </div>

      
          <div>
        
          
            <div className="flex justify-around  mt-16">
              <TiSocialFacebook className="w-10 h-10 text-blue-700 hover:text-blue-900" />
              <TiSocialLinkedin className="w-10 h-10 text-blue-700 hover:text-blue-900" />
              <TiSocialTwitter className="w-10 h-10 text-blue-700 hover:text-blue-900" />
              <TiMail className="w-10 h-10 text-blue-700 hover:text-blue-900" />
              <TiPhone className="w-10 h-10 text-blue-700 hover:text-blue-900" />
            </div>
      
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
