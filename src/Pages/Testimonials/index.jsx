import React from "react";
import Back from "../../assets/images/Testimonials.jpg";
import TFirst from "./TFirst";
import TTwo from "./TTwo";
import Profile from "../../Components/Profile";

const Testimonials = () => {
  return (
    <>
      <Profile Back={Back} />
      <div className="bg-[#f6f2f1] w-full">
        <div className="flex px-10 lg:px-20 py-20 gap-3">
          <div className="flex-2 lg:px-30">
            <h1 className="text-[46px] md:text-[100px] lg:text-[125px] cardo-regular">
              Testimonials
            </h1>
            <div>
              <h2 className="text-[14px] raleway-font lg:text-[16px]">
                The team was incredible! They handled every last-minute hiccup
                with grace, especially on the day. Our wedding was beyond what
                we imagined, and we actually got to enjoy the entire day!
              </h2>
            </div>
          </div>
          <div className="flex-1 hidden lg:block"></div>
        </div>
        <TFirst />
        <TTwo />
      </div>
    </>
  );
};

export default Testimonials;
