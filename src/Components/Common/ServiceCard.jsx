import React from "react";

const ServiceCard = ({ src, title, about }) => {
  return (
    <div className="py-5 place-items-center md:py-10">
      <div className="flex justify-center w-[335px] md:w-[203px] lg:w-[311px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={title} />
      </div>
      <div className="flex flex-col md:flex-row pt-[20px] md:space-x-3">
        <div className="md:py-10">
          <div className="border-b-2 md:border-b border-[#E9744B] w-10"></div>
        </div>
        <div className="py-6 text-left">
          <h2 className="text-[20px] md:text-[20px] lg:text-[22px] cardo-regular pb-[10px] text-black">
            {title}
          </h2>
          <p className="text-[14px] lg:w-60 md:text-[14px] lg:text-[16px] raleway-font text-gray-600 leading-relaxed">
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
