import React from 'react'
import Back from "../../assets/images/banner-03.jpg";   

const Hpage = () => {
  return (
    <>
    <div className="relative w-full h-100 md:h-screen bg-[#f0eded] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Back})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f5f0f0]/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-around h-full px-10 md:px-24 lg:px-32 text-black">
          {/* Name */}
          <div>
            <h1 className="cardo-regular font-light text-center flex md:flex-col text-[46px] md:text-[100px] lg:text-[125px] leading-none">
              <span className="px-[5px]">Olivia</span>
              <span> Dunham</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[20px] cardo-regular font-serif md:text-[24px] flex items-center mt-4">
              <span className="border-b border-black w-10 h-0 block"></span>
              <span className="ml-3 text-lg tracking-wider">
                Wedding Planner{" "}
              </span>
            </p>
          </div>

          {/* Button */}
          <div>
          <button className=" md:mt-10 bg-black text-white px-6 raleway-font py-3 text-[16px] md:text-[18px] hover:bg-gray-800 transition duration-300">
            Book Your Free Consultation <span className="px-[10px]"> &rarr;</span>
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hpage