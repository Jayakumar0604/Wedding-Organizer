import React from "react";
import WPic from "../../assets/images/services-03-free-img.webp";
import BPic from "../../assets/images/services-02-free-img.webp";
import HPic from "../../assets/images/services-01-free-img.webp";

const HSecond = () => {
  const data = [
    {
      id: 1,
      src: WPic,
      title: "Full Planning",
      about:
        "This is our comprehensive, end-to-end service. We manage everything: budgeting, vendor selection, design, and seamless day-of execution. Your perfect wedding, zero stress.",
    },
    {
      id: 2,
      src: BPic,
      title: "Destination Wedding",
      about:
        "Dreaming of a wedding abroad? We handle all international logistics, local vendors, and guest travel for a truly seamless and unforgettable celebration.",
    },
    {
      id: 3,
      src: HPic,
      title: "Express Wedding",
      about:
        "Perfect for tight deadlines. We fast-track design and logistics, delivering a stunning, fully planned, high-quality wedding experience in under four months.",
    },
  ];
  return (
    <>
      <div className="bg-[#f0eded] text-center overflow-hidden px-[30px]">
        <h1 className="text-[40px] py-[40px] md:py-[0px] md:text-[100px] cardo-regular">
          Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row overflow-hidden justify-around">
        {data?.map((items) => (
          <div key={items.id} className="py-5 place-items-center md:py-20 ">
            <div className="flex  justify-center w-[335px] md:w-[203px] lg:w-[311px]">
              <img src={items.src} className="" alt="Wedding Image" />
            </div>
            <div className="flex flex-col md:flex-row pt-[20px]  md:space-x-3">
              <div className="md:py-10">
                <h1 className="border-b-2 md:border-b-1 w-10"></h1>
              </div>
              <div className="py-6">
                <h1 className="text-[20px] md:text-[20px] lg:text-[22px] cardo-regular pb-[10px]">
                  {items.title}
                </h1>
                <h1 className="text-[14px] lg:w-60 md:text-[14px] lg:text-[16px] raleway-font">
                  {items.about}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HSecond;
