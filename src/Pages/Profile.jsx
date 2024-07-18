import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import ChatBox from "./ChatBox";
import {
  FaLocationArrow,
  FaBed,
  FaCar,
  FaDumbbell,
  FaCouch,
  FaUtensils,
  FaUserFriends,
  FaBath,
  FaSnowflake,
  FaMoneyBill,
  FaBurn,
  FaCubes,
  FaGamepad,
  FaTshirt,
} from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

const Profile = () => {
  const { isCustomerAuthenticated, properties, setProperties } = useContext(Context);
  const navigateTo = useNavigate();

  const [isChatting, setIsChatting] = useState(false);

  const handleChat = (e) => {
    e.preventDefault();
    setIsChatting(!isChatting);
  };


  const [filters, setFilters] = useState({
    location: "",
    gym: "",
    parking: "",
    food: "",
    attachWashroom: "",
    fridge: "",
    furnish: "",
    indoorGames: "",
  });

  const getAllProperties = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/property/getAllProperties",
        { withCredentials: true }
      );
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isCustomerAuthenticated) {
      navigateTo("/login");
    }

    getAllProperties();
  }, [isCustomerAuthenticated]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = (property) => {
    const { location, gym, parking, food, attachWashroom, fridge, furnish, indoorGames } = filters;

    return (
      (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
      (!gym || property.gym === gym) &&
      (!parking || property.parking === parking) &&
      (!food || property.food === food) &&
      (!attachWashroom || property.attachWashroom === attachWashroom) &&
      (!fridge || property.fridge === fridge) &&
      (!furnish || property.furnish === furnish) &&
      (!indoorGames || property.indoorGames.toLowerCase().includes(indoorGames.toLowerCase()))
    );
  };

  return (
    <div className="bg-blue-50 px-44">
      <div className="container px-20 min-h-screen py-8">
        <h1 className="text-6xl font-bold text-black mb-12 mt-8 flex justify-center items-center">
          PROPERTIES
        </h1>

        {/* Filter Form */}
        <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          <h3 className="text-4xl font-bold mb-8 flex justify-center items-center text-black">
            Filter Options
          </h3>
          <div className="grid grid-cols-2 gap-4">


            <select
              name="gym"
              value={filters.gym}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Gym</option>
              <option value="Available">Available</option>
              <option value="NotAvailable">NotAvailable</option>
            </select>
            <select
              name="parking"
              value={filters.parking}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Parking</option>
              <option value="Available">Available</option>
              <option value="NotAvailable">NotAvailable</option>
            </select>
            <select
              name="attachWashroom"
              value={filters.attachWashroom}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Personal Washroom</option>
              <option value="Available">Available</option>
              <option value="NotAvailable">NotAvailable</option>
            </select>
            <select
              name="food"
              value={filters.food}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Food</option>
              <option value="WithFood">WithFood</option>
              <option value="WithoutFood">WithoutFood</option>
            </select>

            <select
              name="fridge"
              value={filters.fridge}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Fridge</option>
              <option value="Available">Available</option>
              <option value="NotAvailable">NotAvailable</option>
            </select>
            <select
              name="furnish"
              value={filters.furnish}
              onChange={handleFilterChange}
              className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
            >
              <option value="">Furnish</option>
              <option value="Furnished">Furnished</option>
              <option value="SemiFurnished">SemiFurnished</option>
              <option value="UnFurnished">Unfurnished</option>
            </select>



          </div>
        </div>

        {properties && properties.length > 0 ? (
          properties.filter(applyFilters).map((property) => (
            <div
              key={property._id}
              className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-4xl font-bold mb-8 flex justify-center items-center text-black">
                {property.name}
              </h3>



              <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                {/* Photo Section */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
                  {[1, 2, 3, 4].map((index) => (
                    <img
                      key={index}
                      src={
                        property[`image${index}Avatar`] &&
                        property[`image${index}Avatar`].url
                      }
                      alt={`Property Image ${index}`}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                  ))}
                </div>

                {/* Information Section */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Location: <FaLocationArrow /> {property.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Purpose: <MdOutlineAttachMoney /> {property.purpose}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Bedrooms: <FaBed /> {property.bedrooms}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Food: <FaUtensils /> {property.food}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Sharing: <FaUserFriends /> {property.sharing}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Attached Washroom: <FaBath /> {property.attachWashroom}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      AC: <FaSnowflake /> {property.ac}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Rent: <FaMoneyBill /> {property.rent}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Geyser: <FaBurn /> {property.geyser}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Fridge: <FaCubes /> {property.fridge}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Indoor Games: <FaGamepad /> {property.indoorGames}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Cloth Washing Service: <FaTshirt /> {property.clothWashingService}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Parking: <FaCar /> {property.parking}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Gym: <FaDumbbell /> {property.gym}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Furnish: <FaCouch /> {property.furnish}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Pg/Flat: <FaBed /> {property.pgFlat}
                    </span>
                  </div>
                </div>
              </div>



              {/* <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <img
                    key={index}
                    src={
                      property[`image${index}Avatar`] &&
                      property[`image${index}Avatar`].url
                    }
                    alt={`Property Image ${index}`}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                ))}
              </div> */}

              {/* <div className=" ">

                <div>

                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Location: <FaLocationArrow /> {property.location}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Purpose: <MdOutlineAttachMoney /> {property.purpose}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Bedrooms: <FaBed /> {property.bedrooms}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Food: <FaUtensils /> {property.food}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Sharing: <FaUserFriends /> {property.sharing}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Attached Washroom: <FaBath /> {property.attachWashroom}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      AC: <FaSnowflake /> {property.ac}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Rent: <FaMoneyBill /> {property.rent}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Geyser: <FaBurn /> {property.geyser}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Fridge: <FaCubes /> {property.fridge}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Indoor Games: <FaGamepad /> {property.indoorGames}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Cloth Washing Service: <FaTshirt /> {property.clothWashingService}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Parking: <FaCar /> {property.parking}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Gym: <FaDumbbell /> {property.gym}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Furnish: <FaCouch /> {property.furnish}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-full px-2 py-1 border border-gray-300 rounded">
                      Pg/Flat: <FaBed /> {property.pgFlat}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          ))
        ) : (
          <h2 className="text-center text-gray-500">No Properties Found</h2>
        )}
      </div>
      <div className="flex relative justify-end pb-10 px-2 pr-20">
        {isChatting ? (
          <div className="ml-4">
            <ChatBox />
            <div>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={handleChat}
              >
                Close Chat
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleChat}
              className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
