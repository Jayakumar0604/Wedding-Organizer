import React from "react";

const Profile = ({ Back, title, subtitle }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Back})` }}
        className="w-full h-[420px] md:h-150 bg-cover bg-right md:bg-center flex items-end relative"
      >
        {/* Overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>

        {/* Text/Breadcrumb Card */}
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-[310px] mb-[20px] ml-5 md:ml-20 md:mb-0 md:w-[600px] lg:w-[866px] py-[30px] px-8 md:py-[40px] shadow-2xl border-l-4 border-[#E9744B]">
          {title ? (
            <div>
              <span className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] text-[#E9744B] font-semibold raleway-font">
                {subtitle || "Saffron & Silk Weddings"}
              </span>
              <h1 className="text-[32px] md:text-[54px] cardo-regular leading-tight mt-1 text-black">
                {title}
              </h1>
            </div>
          ) : (
            <div className="h-6"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
