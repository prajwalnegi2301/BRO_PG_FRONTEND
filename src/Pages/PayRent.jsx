import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';

// import QRCodeImage from '../images/qr_code.png'; // Replace with your QR code image

const PayRent = () => {
  
  const {isCustomerAuthenticated,setIsCustomerAuthenticated} = useContext(Context);
  const navigateTo = useNavigate();
  if(!isCustomerAuthenticated){
    navigateTo("/login");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex justify-center py-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tdUriqYNpZJjychRNh6lwE6wiLGq_E1MyLu7cb-NvZiBA3FAFK3aTO1RAg&s" alt="QR Code" className="w-72 h-72 object-cover rounded-lg shadow-xl" />
        </div>
        <div className="py-6 px-10">
          <div className="text-center text-3xl font-bold text-gray-800 mb-4">Pay Rent</div>
          <div className="flex justify-center pb-6">
            <p className="text-gray-700 text-lg">Scan the QR code to pay rent to the owner.</p>
          </div>
          <div className="flex justify-center pb-6">
            <Link
              to="/userProfile"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRent;
