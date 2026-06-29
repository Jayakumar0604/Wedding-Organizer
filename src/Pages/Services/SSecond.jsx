import React from "react";
import PageIntro from "../../Components/Common/PageIntro";
import SThird from "./SThird";

const SSecond = () => {
  return (
    <div className="bg-[#f6f2f1] w-full">
      <PageIntro
        title="Services"
        description="We transform your unique vision into a flawlessly executed, joyful celebration. From traditional rituals to heritage celebrations, we handle every detail so you can simply savor the moment."
      />
      <SThird/>
    </div>
  );
};

export default SSecond;
