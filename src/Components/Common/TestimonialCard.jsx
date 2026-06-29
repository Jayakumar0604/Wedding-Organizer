import React from "react";

const TestimonialCard = ({ img, about, name, role = "Customer" }) => {
  return (
    <div className="flex flex-col bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <p className="text-gray-700 text-[15px] md:text-[16px] raleway-font leading-relaxed italic mb-6">
        &ldquo;{about}&rdquo;
      </p>
      <div className="flex items-center mt-auto">
        <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-2 border-[#E9744B] shadow-sm flex-shrink-0">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="text-[14px] lg:text-[16px] font-semibold text-[#E9744B] cardo-bold">
            {name}
          </h4>
          <span className="text-[12px] lg:text-[13px] text-gray-400 raleway-font">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TestimonialCard);
