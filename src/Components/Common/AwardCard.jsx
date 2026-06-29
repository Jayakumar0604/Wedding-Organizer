import React from "react";

const AwardCard = ({ title, org, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#f6f2f1] rounded-lg hover:shadow-md transition-all duration-300 border-t-4 border-[#E9744B]">
      <div className="mb-4 bg-white p-4 rounded-full shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <h3 className="cardo-regular text-lg md:text-xl font-semibold mb-2 text-black">
        {title}
      </h3>
      <p className="raleway-font text-xs md:text-sm text-gray-500">
        {org}
      </p>
    </div>
  );
};

export default React.memo(AwardCard);
