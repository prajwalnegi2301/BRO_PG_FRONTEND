import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertySlider = ({ properties }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center">
      <Slider {...sliderSettings} className="w-1/2">
        {properties.map((property) => (
          <div key={property._id} className="relative">
            {/* Large Image */}
            <img
              src={property.image1Avatar && property.image1Avatar.url}
              alt={`Property Image 1`}
              className="w-full h-96 object-cover rounded"
            />

            {/* Property Details */}
            <div className="absolute top-0 right-0 bg-white p-4 shadow-md">
              <h3 className="text-4xl font-bold mb-4">{property.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 border border-gray-300 rounded">
                    Location: <FaLocationArrow /> {property.location}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 border border-gray-300 rounded">
                    Purpose: <MdOutlineAttachMoney /> {property.purpose}
                  </span>
                </div>
                {/* Add other property details as needed */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
