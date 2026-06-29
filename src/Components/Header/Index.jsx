import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-regular-free-img.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const Icon = [
    { id: 1, name: <FaFacebookSquare />, link: "/" },
    { id: 3, name: <FaTwitter />, link: "/" },
    { id: 2, name: <FaInstagram />, link: "/" },
  ];

  const Nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Gallery", link: "/gallery" },
    { id: 5, name: "Testimonials", link: "/testimonials" },
    { id: 6, name: "Contact", link: "/contact" },
  ];

  const MenuChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[#f0eded] flex items-center justify-around">
        <div className="w-[83px] lg:w-[120px] py-[16px]">
          <Link to="/">
            <img src={logo} alt="Website Logo" />
          </Link>
        </div>
        <h1
          className="text-[26px] p-[10px] block lg:hidden border text-[#E9744B]"
          onClick={MenuChange}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </h1>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav className="flex raleway-font">
              {Nav.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`px-[16px] hover:text-[#E9744B] ${
                    currentPath === item.link
                      ? "text-[#E9744B] font-semibold"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex">
              {Icon.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="px-[10px] py-[10px] rounded-[100px] hover:bg-[#808285]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <nav className="block text-[15px] raleway-font duration-300 font-normal lg:hidden">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={`flex flex-col py-[10px] justify-center px-[20px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] ${
                currentPath === item.link
                  ? "text-[#E9744B] font-semibold"
                  : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;