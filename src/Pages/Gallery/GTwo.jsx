import React from "react";
import G1 from "../../assets/Gallery/G1.webp";
import G2 from "../../assets/Gallery/G2.webp";
import G3 from "../../assets/Gallery/G3.webp";
import G4 from "../../assets/Gallery/G4.webp";
import G5 from "../../assets/Gallery/G5.webp";
import G6 from "../../assets/Gallery/G6.webp";
import G7 from "../../assets/Gallery/G7.webp";
import G8 from "../../assets/Gallery/G8.webp";
import G9 from "../../assets/Gallery/G9.webp";

const GTwo = () => {
  const Images = [
    {
      img: G1,
    },
    {
      img: G2,
    },
    {
      img: G3,
    },
    {
      img: G4,
    },
    {
      img: G5,
    },
    {
      img: G6,
    },
    {
      img: G7,
    },
    {
      img: G8,
    },
    {
      img: G9,
    },
  ];

  return (
    <>
      <div className="bg-[#f6f2f1] w-full">
        <div className="flex px-10 lg:px-20 py-20 gap-3">
          <div className="flex-2 lg:px-30">
            <h1 className="text-[46px] md:text-[100px] lg:text-[125px] cardo-regular">
              Gallery
            </h1>
            <div>
              <h2 className="text-[14px] raleway-font lg:text-[16px]">
                Explore our favorite moments. This gallery features the best of
                our planning, design, and coordination work across all our
                service types. Click through to see the dedication, style, and
                bespoke quality we bring to every celebration.
              </h2>
            </div>
          </div>
          <div className="flex-1 hidden lg:block"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 bg-[#f6f2f1]">
        {Images?.map((items, img) => (
          <div key={img}>
            <img src={items.img} alt="Wedding Gallery" />
          </div>
        ))}
      </div>
    </>
  );
};

export default GTwo;
