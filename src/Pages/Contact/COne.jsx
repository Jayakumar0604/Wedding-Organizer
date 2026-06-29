import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Form from "./Form";

const COne = () => {
  const Icons = [
    {
      icon: <FaFacebook />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaLinkedin />,
    },
    {
      icon: <FaGooglePlus />,
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div>
          <div className="pb-[50px]">
            <h1 className="text-[25px] lg:text-[28px] pb-[10px] cardo-regular">
              Our Office
            </h1>
            <p className="text-[14px] lg:text-md raleway-font">
              45, East Car Street, Pudukkottai, Tamil Nadu - 622001, India
            </p>
          </div>
          <div className="pb-[50px]">
            <h1 className=" text-[25px] lg:text-[28px] pb-[10px] cardo-regular">
              Contact us
            </h1>
            <div className="text-[14px] lg:text-md raleway-font space-y-1">
              <p>Email: jayakumarcse0421@gmail.com </p>
              <p>Phone: +91 92924 26868 </p>
            </div>
          </div>
          <div className="pb-[50px]">
            <h1 className="text-[25px] lg:text-[28px] pb-[10px] cardo-regular">
              Social Media
            </h1>
            <div className="flex gap-4">
              {Icons?.map((items, i) => (
                <div key={i} className="text-xl py-2 raleway-font">
                  {items.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:mx-5 lg:mx-10 py-10 bg-white shadow-lg rounded-lg border-t-4 border-[#E9744B]">
          <Form />
        </div>
      </div>
    </>
  );
};

export default COne;
