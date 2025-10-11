import React from "react";
import logo from "../../assets/images/logo-light-free-img.png";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  //Icons Data
  const Icon = [
    {
      id: 1,
      name: <FaFacebookSquare />,
      link: "/",
    },
    {
      id: 2,
      name: <FaTwitter />,
      link: "/",
    },
    {
      id: 3,
      name: <FaInstagram />,
      link: "/",
    },
    {
      id: 4,
      name: <FaGoogle />,
      link: "/",
    },
    {
      id: 5,
      name: <FaLinkedin />,
      link: "/",
    },
  ];
  return (
    <>
    <div className="bg-black md:p-[30px]">
      <div className="flex flex-col p-[20px] justify-center items-center">
        <div className="py-[20px]">
          <img src={logo} alt="Logo Image" />
        </div>
        <h1 className="flex py-[10px]">
          {Icon?.map((items) => (
            <a
              className="px-[10px] text-[14px] bg-white py-[10px] mx-[10px] hover:text-[#E9744B]"
              key={items.id}
              href={items.link}
            >
              {items.name}
            </a>
          ))}
        </h1>
        <h1 className="text-white text-[14px] md:text-[16px] raleway-font py-[10px]">
         Copyright &copy; 2025 Wedding Organizer
        </h1>
      </div>
      </div>
    </>
  );
};

export default Footer;
