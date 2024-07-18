import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

function Navbar() {
  const { isCustomerAuthenticated, setIsCustomerAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsCustomerAuthenticated(false);
      navigateTo("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const goToLogin = () => {
    navigateTo("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="text-blue-800 bg-gradient-to-t from-blue-100 via-blue-100 to-blue-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-2xl font-bold text-white">
                <img src="\Bro_PG_logo.png" className="w-20 h-12" alt="" />
                <span className="text-blue-500">BRO PG</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              {isCustomerAuthenticated ? (
                <Link to="/userProfile" className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center">
                  <FaUserAlt className="inline-block mr-2" />
                  Profile
                </Link>
              ) : (
                <Link to="/about" className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center">
                  <FaInfoCircle className="inline-block mr-2" />
                  About Us
                </Link>
              )}

              {isCustomerAuthenticated ? (
                <Link to="/complaint" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                  <FaPhoneAlt className="inline-block mr-2" />
                  Complaint Form
                </Link>
              ) : (
                <Link to="/contact" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                  <FaPhoneAlt className="inline-block mr-2" />
                  Contact Us
                </Link>
              )}

              <Link to="/profile" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                <FaHome className="inline-block mr-2" />
                Properties
              </Link>
            </div>
            {isCustomerAuthenticated ? (
              <button className="text-blue-500 text-lg hover:text-blue-700 font-semibold" onClick={handleLogout}>
                LOGOUT
              </button>
            ) : (
              <button className="text-blue-500 text-lg hover:text-blue-700 font-semibold" onClick={goToLogin}>
                LOGIN
              </button>
            )}
            <div className="md:hidden flex items-center">
              <button onClick={toggleSidebar}>
                <FaBars className="text-blue-500 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="bg-white w-64 h-full shadow-md flex flex-col">
          <div className="flex justify-between p-4">
            <span className="text-xl font-bold text-blue-500">BRO PG</span>
            <button onClick={toggleSidebar}>
              <FaTimes className="text-blue-500 text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {isCustomerAuthenticated ? (
              <Link to="/userProfile" className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center">
                <FaUserAlt className="inline-block mr-2" />
                Profile
              </Link>
            ) : (
              <Link to="/about" className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center">
                <FaInfoCircle className="inline-block mr-2" />
                About Us
              </Link>
            )}

            {isCustomerAuthenticated ? (
              <Link to="/complaint" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                <FaPhoneAlt className="inline-block mr-2" />
                Complaint Form
              </Link>
            ) : (
              <Link to="/contact" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
                <FaPhoneAlt className="inline-block mr-2" />
                Contact Us
              </Link>
            )}

            <Link to="/profile" className="text-blue-500 hover:text-blue-700 px-3 py-2 rounded-md text-lg font-medium flex items-center">
              <FaHome className="inline-block mr-2" />
              Properties
            </Link>

            {isCustomerAuthenticated ? (
              <button className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center" onClick={handleLogout}>
                LOGOUT
              </button>
            ) : (
              <button className="text-blue-500 text-lg hover:text-blue-700 font-semibold flex items-center" onClick={goToLogin}>
                LOGIN
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
