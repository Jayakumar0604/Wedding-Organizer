import React from "react";
import TeamCard from "../../Components/Common/TeamCard";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const AThird = () => {
  //Icons Data
  const Icon = [
    {
      id: 1,
      name: <FaFacebookF />,
      link: "#",
    },
    {
      id: 3,
      name: <FaTwitter />,
      link: "#",
    },
    {
      id: 2,
      name: <FaInstagram />,
      link: "#",
    },
  ];

  const Team = [
    {
      id: 1,
      role: "Founder & Director",
      name: "Jayakumar",
      about:
        "Jayakumar built Saffron & Silk on a single vision: organizing flawless traditional South Indian weddings that respect both family customs and budget, ensuring unforgettable celebrations.",
    },
    {
      id: 2,
      role: "Lead Event Designer",
      name: "Indhumathi",
      about:
        "Indhumathi specializes in exquisite temple-style mandapam decoration, custom stage floral setups, and traditional lighting designs that look breathtaking.",
    },
    {
      id: 3,
      role: "Head Wedding Planner",
      name: "Sathya",
      about:
        "Sathya coordinates all custom rituals, from early morning Muhurthams to heritage processions, managing catering, priests, and guest hospitality with absolute grace.",
    },
  ];
  return (
    <>
      <div className="bg-black text-white border-b border-[#7A7A7A] py-16">
        <div className="px-5 md:px-20">
          <h1 className="text-[40px] md:text-[62px] lg:text-[80px] cardo-regular pb-[10px] text-[#E9744B]">
            Our Team
          </h1>
          <p className="raleway-font text-gray-400 max-w-lg mb-10 text-[14px] md:text-[16px]">
            Meet our dedicated event planners and directors who turn your dream Kalyanam into an exquisite reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {Team?.map((member) => (
              <TeamCard
                key={member.id}
                role={member.role}
                name={member.name}
                about={member.about}
                socialIcons={Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AThird;
