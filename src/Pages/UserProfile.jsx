import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import MouseTracker from "./MouseTracker";

const ProfileCard = () => {
  const { isCustomerAuthenticated, setIsCustomerAuthenticated, user, setUser } =
    useContext(Context);
  const navigateTo = useNavigate();

  const deleteCustomer = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        "http://localhost:8000/api/v1/user/deleteCustomerDetails",
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsCustomerAuthenticated(false);
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  if (!isCustomerAuthenticated) {
    navigateTo("/login");
  }

  const handlePayRent = () => {
    navigateTo("/payRent");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 py-24 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex justify-center py-6 bg-blue-200">
          <img
            src={
              user.docAvatar && user.docAvatar.url
                ? user.docAvatar.url
                : "default-image-url"
            }
            alt="Profile Image"
            className="h-48 w-48 object-cover shadow-xl rounded-full"
          />
        </div>
        <div className="py-6 px-10">
          <div className="text-center text-3xl font-bold text-gray-800 mb-4">
            {user.name}
          </div>
          <div className="flex flex-col text-gray-700">
            <div className="mb-2">
              <strong>Date of Birth:</strong> {user.dob}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {user.phone}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {user.gender}
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-6 space-x-4">
          <Link
            to="/profile"
            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Properties
          </Link>
          <button
            onClick={handlePayRent}
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Pay Rent
          </button>
        </div>
        <div className="flex justify-center pb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tdUriqYNpZJjychRNh6lwE6wiLGq_E1MyLu7cb-NvZiBA3FAFK3aTO1RAg&s"
            alt="QR Code"
            className="w-48 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center pb-6">
          <p className="text-gray-700 text-sm">
            Scan the QR code to pay rent to the owner.
          </p>
        </div>
        <div className="flex justify-center pb-6 space-x-4">
          <button
            onClick={deleteCustomer}
            className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            <RiDeleteBin6Line className="mr-2 text-xl" /> Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
