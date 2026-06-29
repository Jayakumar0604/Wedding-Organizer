import React from "react";
import TestimonialCard from "../../Components/Common/TestimonialCard";
import B1 from "../../assets/b1.webp";
import B2 from "../../assets/b2.webp";
import B3 from "../../assets/b3.webp";
import B4 from "../../assets/b4.webp";
import G1 from "../../assets/gg1.webp";
import G2 from "../../assets/gg2.webp";
import G3 from "../../assets/gg3.webp";
import G4 from "../../assets/gg4.webp";

const TFirst = () => {
  const Profile = [
    {
      img: B1,
      about:
        "The catering and traditional Kalyana Sappadu served on banana leaves was extraordinary! Our guests are still talking about the delicious feast. Saffron & Silk managed everything flawlessly.",
      name: "Arjun",
    },
    {
      img: G1,
      about:
        "The marigold and jasmine decorations at our mandapam looked stunning! The team coordinated the early morning Muhurtham flawlessly. Sathya felt like family to us.",
      name: "Priya",
    },
    {
      img: B2,
      about:
        "Planning a destination Chettinad palace wedding seemed impossible, but Saffron & Silk handled everything from guest travels to local priests and Nadaswaram bands. Absolute bliss!",
      name: "Rohan",
    },
    {
      img: B3,
      about:
        "Sathya's ritual coordination was a lifesaver. She managed the early morning Kasi Yatra and Nalangu timings perfectly. We could relax and enjoy our special day.",
      name: "Deepak",
    },
    {
      img: G3,
      about:
        "The Nalangu ceremony was so lively and fun! Saffron & Silk organized traditional swing decor and games. Their day-of coordination was incredibly helpful.",
      name: "Anjali",
    },
    {
      img: B4,
      about:
        "Our subha muhurtham date was fixed with just two months notice. Their express coordination delivered a high-quality, beautiful traditional wedding in record time.",
      name: "Vikram",
    },
    {
      img: G2,
      about:
        "From the spectacular Mappillai Azhaippu grand entrance to the reception, every detail was perfect. Having them coordinate meant zero stress for our parents.",
      name: "Kavya",
    },
    {
      img: G4,
      about:
        "The temple decor, traditional music, and overall execution were exactly what we dreamed of. The process was fun, transparent, and completely aligned with our family values.",
      name: "Meera",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-6 px-5 md:px-20">
        {Profile?.map((items, index) => (
          <TestimonialCard
            key={index}
            img={items.img}
            about={items.about}
            name={items.name}
          />
        ))}
      </div>
    </>
  );
};

export default TFirst;
