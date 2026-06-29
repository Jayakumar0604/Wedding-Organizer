import React from 'react'
import Button from "../../Components/Common/Button";
import Back from "../../assets/banner-03.webp";   

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
            <h1 className="cardo-regular font-light text-left flex flex-col text-[46px] md:text-[100px] lg:text-[120px] leading-none">
              <span className="text-[#E9744B]">Saffron</span>
              <span>& Silk</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[20px] cardo-regular font-serif md:text-[24px] flex items-center mt-4">
              <span className="border-b border-black w-10 h-0 block"></span>
              <span className="ml-3 text-lg tracking-wider">
                Traditional Tamil Nadu Wedding Planners
              </span>
            </p>
          </div>

          {/* Button */}
          <div>
            <Button to="/contact" variant="primary" className="md:mt-10">
              Plan Your Dream Kalyanam <span className="ml-2">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hpage