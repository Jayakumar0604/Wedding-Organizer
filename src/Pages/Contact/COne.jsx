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
            <h2 className="text-[14px] lg:text-md raleway-font">
              123 Pudukkottai, Pudukkottai(Dt), TN 10160, India{" "}
            </h2>
          </div>
          <div className="pb-[50px]">
            <h1 className=" text-[25px] lg:text-[28px] pb-[10px] cardo-regular">
              Contact us
            </h1>
            <h2 className="text-[14px] lg:text-md raleway-font">
              <h1>Email: jayakumarcse0421@gmail.com </h1>
              <h2>Phone: 929-242-6868 </h2>
            </h2>
          </div>
          <div className="pb-[50px]">
            <h1 className="text-[25px] lg:text-[28px] pb-[10px] cardo-regular">
              Social Media
            </h1>
            <div className="flex gap-4">
              {Icons?.map((items, i) => (
                <h2 key={i} className="text-xl py-2 raleway-font">
                  {items.icon}{" "}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:mx-5 lg:mx-10 py-10 bg-white">
          <Form />
        </div>
      </div>
    </>
  );
};

export default COne;
