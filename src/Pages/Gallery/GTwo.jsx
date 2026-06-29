import React from "react";
import PageIntro from "../../Components/Common/PageIntro";
import G1 from "../../assets/G1.webp";
import G2 from "../../assets/G2.webp";
import G3 from "../../assets/G3.webp";
import G4 from "../../assets/G4.webp";
import G5 from "../../assets/G5.webp";
import G6 from "../../assets/G6.webp";
import G7 from "../../assets/G7.webp";
import G8 from "../../assets/G8.webp";
import G9 from "../../assets/G9.webp";

const GTwo = () => {
  const Images = [
    { img: G1 },
    { img: G2 },
    { img: G3 },
    { img: G4 },
    { img: G5 },
    { img: G6 },
    { img: G7 },
    { img: G8 },
    { img: G9 },
  ];

  return (
    <>
      <PageIntro
        title="Gallery"
        description="Explore our favorite moments. This gallery features the best of our traditional planning, wedding stage design, and mandapam coordination work across all our service types. See the dedication, style, and bespoke quality we bring to every celebration."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 bg-[#f6f2f1] px-4">
        {Images?.map((items, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img src={items.img} alt="Wedding Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </>
  );
};

export default GTwo;
