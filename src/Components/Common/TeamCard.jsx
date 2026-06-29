import React from "react";

const TeamCard = ({ role, name, about, socialIcons }) => {
  return (
    <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 transition-all duration-300 hover:border-[#E9744B] hover:shadow-lg">
      <span className="text-[#E9744B] text-[14px] lg:text-[16px] cardo-regular block uppercase tracking-wider mb-1">
        {role}
      </span>
      <h2 className="cardo-regular text-[28px] md:text-[32px] lg:text-[40px] text-white leading-tight pb-3">
        {name}
      </h2>
      <p className="text-[14px] lg:text-[16px] raleway-font text-gray-400 leading-relaxed min-h-[80px]">
        {about}
      </p>
      <div className="pt-5 flex items-center gap-2">
        {socialIcons?.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-[#E9744B] hover:text-white transition duration-300 shadow-sm"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TeamCard);
