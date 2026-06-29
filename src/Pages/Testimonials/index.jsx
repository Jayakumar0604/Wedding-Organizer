import React from "react";
import Back from "../../assets/Testimonials.webp";
import TFirst from "./TFirst";
import TTwo from "./TTwo";
import Profile from "../../Components/Profile";
import PageIntro from "../../Components/Common/PageIntro";

const Testimonials = () => {
  return (
    <>
      <Profile Back={Back} title="Testimonials" subtitle="Kind Words From Couples" />
      <div className="bg-[#f6f2f1] w-full">
        <PageIntro
          title="Testimonials"
          description="Read about the experiences of our happy couples. From early morning Muhurtham timings to spectacular grand reception entrances, discover how Saffron & Silk makes traditional Tamil weddings stress-free and magical."
        />
        <TFirst />
        <TTwo />
      </div>
    </>
  );
};

export default Testimonials;
