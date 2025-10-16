import React from "react";
import Back from "../../assets/images/Back.webp";
import COne from "./COne";
import Map from "./Map";
import Profile from "../../Components/Profile";

const Contact = () => {
  return (
    <>
      <Profile Back={Back} />
      <div className="bg-[#f6f2f1] px-5 md:px-10 lg:px-20 py-10 w-full">
        <div className="flex-2 py-10 xl:text-center">
          <h1 className="text-[46px] md:text-[100px] lg:text-[125px] cardo-regular">
            Contact Us Today!
          </h1>
        </div>
        <COne/>
      </div>
      <Map/>
    </>
  );
};

export default Contact;
