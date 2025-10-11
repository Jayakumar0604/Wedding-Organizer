import React from "react";
import Pic from "../../assets/images/about-01-free-img.jpg";
import Back from "../../assets/images/bg-overlay-01-free-img.png";

const HFirst = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row justify-center items-center overflow-hidden md:justify-evenly object-center bg-center ">
        {/* <div className="absolute object-right inset-0"></div> */}
        <div className="lg:py-30 px-5 md:px-40 lg:w-400">
          <div className=" pb-[20px] md:pb-[50px]">
            <h1 className="cardo-regular pt-[10px] text-[40px] md:text-[100px]">
              About
            </h1>
          </div>
          <h1 className="cardo-regular text-[25px] md:text-[28px] mb-[10px]">
            Dreaming of the perfect wedding?
          </h1>
          <div className=" pb-[20px] md:pb-[40px]">
            <h1 className="text-[14px] md:text-[16px] md:pr-[80px] mb-[40px] raleway-font">
              Welcome, my name is Sathya. Our passion is crafting unique,
              magnificent weddings. We believe every couple deserves a
              celebration built on meticulous planning, expert guidance, and
              creative design. We invite you to explore our services and see how
              we eliminate stress, ensuring your special day is flawlessly
              executed and truly unforgettable. We are here to bring your vision
              to life.  
            </h1>
            <button className="text-[16px] text-white bg-black ralewar-font px-[30px] py-[20px] md:px-[20px]">
              Read More
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Back})` }}
          className="lg:w-400 px-[20px] py-[20px] md:py-[40px] bg-center object-cover"
        >
          <img src={Pic} alt="" />
        </div>
      </div>
    </>
  );
};

export default HFirst;
