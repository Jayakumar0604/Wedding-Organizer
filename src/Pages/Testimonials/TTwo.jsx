import React from "react";
import AwardCard from "../../Components/Common/AwardCard";
import { FaAward, FaTrophy, FaRibbon } from "react-icons/fa";

const TTwo = () => {
  const awards = [
    {
      id: 1,
      title: "Best South Indian Heritage Wedding Planner",
      org: "South Indian Wedding Association (SIWA) - 2024",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
    },
    {
      id: 2,
      title: "Outstanding Cultural Authenticity Award",
      org: "Tamil Nadu Tourism & Heritage Guild - 2023",
      icon: <FaAward className="text-yellow-500 text-4xl" />,
    },
    {
      id: 3,
      title: "Elite Catering Coordination Excellence",
      org: "South Indian Hospitality Awards - 2024",
      icon: <FaRibbon className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <>
      <div className="bg-white py-16 px-5 md:px-20 mt-10 shadow-sm rounded-lg">
        <div className="text-center place-items-center mb-10">
          <h1 className="cardo-regular text-[30px] md:text-[40px] text-[#E9744B] pb-2 text-center w-full">
            Industry Recognition
          </h1>
          <p className="raleway-font text-gray-500 max-w-lg mx-auto text-sm md:text-base text-center w-full">
            We are proud to have received prestigious awards for our dedication to preserving traditions and executing flawless events.
          </p>
          <div className="border-b-2 border-[#E9744B] w-20 mt-4 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <AwardCard
              key={award.id}
              title={award.title}
              org={award.org}
              icon={award.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TTwo;
