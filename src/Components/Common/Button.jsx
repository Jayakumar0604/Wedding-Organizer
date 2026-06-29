import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, onClick, children, className = "", variant = "primary", type = "button" }) => {
  const baseStyle = "raleway-font text-[16px] px-6 py-3 transition duration-300 cursor-pointer inline-flex items-center justify-center font-semibold rounded shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-[#E9744B] text-white hover:bg-[#d65f36]",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  const buttonStyle = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <span className={buttonStyle}>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default React.memo(Button);
