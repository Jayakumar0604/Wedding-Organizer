import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const AThird = () => {
  //Icons Data
  const Icon = [
    {
      id: 1,
      name: <FaFacebookF />,
      link: "#Home",
    },
    {
      id: 3,
      name: <FaTwitter />,
      link: "#Home",
    },
    {
      id: 2,
      name: <FaInstagram />,
      link: "#Home",
    },
  ];

  const Team = [
    {
      id: 1,
      role: "Owner",
      name: "Jayakumar",
      about:
        "The Owner built this firm on a simple principle: flawless execution. Trust his vision for your unforgettable celebration.",
    },
    {
      id: 2,
      role: "Event Director",
      name: "Indhumathi",
      about:
        "Expert Event Director. She ensures every detail is perfect, delivering breathtaking, personalized weddings with grace.",
    },
    {
      id: 1,
      role: "Wedding Planner",
      name: "Sathya",
      about:
        "Your passionate Wedding Planner. She transforms your vision into a stunning reality, handling every detail with grace.",
    },
  ];
  return (
    <>
      <div className="bg-black text-white border-b  border-[#7A7A7A] py-10 ">
        <div className="px-5 md:px-20">
          <h1 className="text-[40px] md:text-[62px] lg:text-[100px] cardo-regular pb-[20px]">
            Our Team
          </h1>
          <div className="grid md:grid-cols-3 gap-5 py-10 ">
            {Team?.map((i) => (
              <div key={i.id}>
                <h3 className="text-[#e9744b] text-[14px] lg:text-[16px] cardo-regular">
                  {i.role}
                </h3>
                <h1 className="cardo-regular text-[30px] md:text-[35px] lg:text-[50px] pb-[10px]">
                  {i.name}
                </h1>
                <h2 className="text-[14px] lg:text[16px] raleway-font">
                  {i.about}
                </h2>
                <div className="pt-5">
                  <h1 className="flex">
                    {Icon?.map((items) => (
                      <a
                        className="px-[10px] py-[10px] rounded-[100px] hover:text-[#e9744b]"
                        key={items.id}
                        href={items.link}
                      >
                        {items.name}
                      </a>
                    ))}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AThird;
