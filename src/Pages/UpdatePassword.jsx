// src/UpdatePassword.js
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MouseTracker from "./MouseTracker";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await axios
      .delete("https://localhost:8000/api/v1/user/deleteCustomerDetails", {
      })
      .then((response) => {
        console.log("Details deleted:", response.data);
        navigateTo("/");
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };


  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    await axios
      .put("https://localhost:8000/api/v1/user/updateCustomerPassword", {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      })
      .then((response) => {
        console.log("Password updated:", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the password!", error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 shadow-md rounded">
      {/* <MouseTracker/> */}
      <h1 className="text-2xl font-bold mb-5">Update Your Password</h1>
      <form onSubmit={handleUpdateDetails} className="space-y-4">
        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineLock className="mr-2 text-gray-500" />
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border-b border-gray-300 py-2">
          <AiOutlineLock className="mr-2 text-gray-500" />
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Password
        </button> 
      </form>
      <button onClick={handleDeleteUser}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete User
        </button>
    </div>
  );
};

export default UpdatePassword;
