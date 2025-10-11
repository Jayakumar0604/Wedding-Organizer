import React from "react";
import SThird from "./SThird";

const SSecond = () => {
  return (
    <>
      <div className="bg-[#f6f2f1] py-10 w-full">
        <div className="flex px-10 lg:px-20 py-5 md:py-10 lg:py-20 gap-3">
          <div className="flex-2 lg:px-30">
            <h1 className="text-[46px] md:text-[100px] lg:text-[125px] cardo-regular">Services</h1>
            <div>
              <h2 className="text-[14px] raleway-font lg:text-[16px]">
                We transform your unique vision into a flawlessly executed,
                joyful celebration. From local luxury to international
                adventure, we handle every detail so you can simply savor the
                moment
              </h2>
            </div>
          </div>
          <div className="flex-1 hidden lg:block"></div>
        </div>
        <SThird/>
      </div>
    </>
  );
};

export default SSecond;
