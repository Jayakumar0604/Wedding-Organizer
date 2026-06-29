import React from "react";
import Button from "./Button";

const ServiceDetailRow = ({ image, title, description, reverse }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full overflow-hidden shadow-md rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[450px] object-cover hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      {/* Text Box */}
      <div
        className={`md:w-1/2 w-full bg-white shadow-xl p-8 md:p-10 border-t-4 border-[#E9744B] md:absolute z-10 transition-all duration-300 hover:shadow-2xl ${
          reverse
            ? "md:left-10 md:-bottom-10"
            : "md:right-10 md:-bottom-10"
        }`}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-[2px] bg-[#E9744B]"></div>
          <h2 className="text-2xl md:text-[32px] lg:text-[40px] cardo-regular text-black leading-tight">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 text-[14px] lg:text-[16px] raleway-font mb-6 leading-relaxed">
          {description}
        </p>
        <Button to="/contact" variant="primary">
          Book Now <span className="ml-2">&rarr;</span>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ServiceDetailRow);
