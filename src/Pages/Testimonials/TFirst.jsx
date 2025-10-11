import React from "react";
import B1 from "../../assets/Testimonials/b1.jpg";
import B2 from "../../assets/Testimonials/b2.jpg";
import B3 from "../../assets/Testimonials/b3.jpg";
import B4 from "../../assets/Testimonials/b4.jpg";
import G1 from "../../assets/Testimonials/g1.jpg";
import G2 from "../../assets/Testimonials/g2.jpg";
import G3 from "../../assets/Testimonials/g3.jpg";
import G4 from "../../assets/Testimonials/g4.jpg";

const TFirst = () => {
  const Profile = [
    {
      img: B1,
      about:
        "The team was meticulous, handling every vendor and detail flawlessly. Our Full Planning wedding felt like a beautiful dream!",
      name: "Arjun",
    },
    {
      img: G1,
      about:
        "They transformed our venue into a fairytale! The design work was breathtaking and perfectly reflected our personal style.",
      name: "Priya",
    },
    {
      img: B2,
      about:
        "We couldn't have managed the Destination planning without them. Seamless travel, perfect execution, absolute joy!",
      name: "Rohan",
    },
    {
      img: B3,
      about:
        "Jixza's Bridal Assistance was a lifesaver. I felt calm and truly enjoyed every minute of the ceremony and reception.           ",
      name: "Deepak",
    },
    {
      img: G3,
      about:
        "Our Partial Assistance felt like full planning! They jumped in exactly when needed, delivering organization and peace of mind.",
      name: "Anjali",
    },
    {
      img: B4,
      about:
        "Their Express Wedding service delivered sophistication in just three months. Professional and incredibly high-quality planning.",
      name: "Vikram",
    },
    {
      img: G2,
      about:
        "Absolute professionals. From the first meeting to the last dance, their coordination meant zero stress for us. Highly recommend!",
      name: "Kavya",
    },
    {
      img: G4,
      about:
        "The whole process was fun, not stressful. We received honest advice and a wedding day that was truly magical and personal.     ",
      name: "Meera",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 raleway-font md:gap-4 lg:gap-2 px-5 md:px-20">
        {Profile?.map((items, img) => (
          <div key={img} >
            <div className="md:px-5 lg:px-20 py-5 text-[16px]">{items.about}</div>
            <div className="flex py-5 md:px-10 lg:px-20  items-center">
              <img src={items.img} alt="" className="w-[100px] rounded-full" />
              <div className="px-5">
                <h1 className="text-[14px] lg:text-[16px]">{items.name}</h1>
                <h1 className="text-[12px] lg:text-[14px]">Customer</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TFirst;
