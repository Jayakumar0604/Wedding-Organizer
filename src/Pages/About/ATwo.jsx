import React from "react";
import About from "../../assets/bg-overlay-01-free-img.png";
import Wed from "../../assets/wedding.webp";
const ATwo = () => {
  return (
    <>
      <div className="w-full  bg-[#f0eded]">
        <div className="flex flex-col md:flex-row ">
          <div className="raleway-font px-[30px] text-[14px] md:text-[16px] md:min-w-md py-10 md:py-20 flex-1">
            <h1 className="text-[46px] md:text-[80px] lg:text-[100px] cardo-regular pb-[20px] text-[#E9744B]">
              Our Story
            </h1>
            <h3 className="pb-[20px] leading-relaxed">
              We believe every couple deserves a wedding as unique as their
              love. Founded on a commitment to flawless execution, deep respect for cultural traditions, and genuine
              partnership, our mission is to remove the stress from planning so
              you can cherish the journey. Our dedicated team, led by
              experienced directors, approaches every celebration with passion
              and meticulous attention to detail. From the grand temple mandapams to the
              smallest ritual details, we ensure a seamless and joyful
              experience. We are here to transform your dreams into an
              unforgettable reality that reflects your personal style and story.
            </h3>
            <h4 className="pb-[20px] leading-relaxed text-gray-700">
              We are passionate about turning your wedding vision into a
              magnificent reality. Our foundation is built on meticulous
              planning, creative South Indian temple floral design, and a dedication to client peace of
              mind. We believe your celebration should be joyful, traditional, and
              stress-free. Trust our expertise to deliver a stunning, perfectly
              executed event that beautifully honors your unique love story and heritage.
            </h4>
          </div>
          <div
            style={{ backgroundImage: `url(${About})` }}
            className="w-full md:w-1/2 min-h-[300px] md:min-h-auto bg-cover bg-center"
          ></div>
        </div>
        <div className="min-h-screen grid lg:space-x-3 grid-cols-1 xl:grid-cols-2 lg:py-10">
          {/* Left Section */}
          <div className="flex items-stretch">
            <div
              className="bg-cover bg-center text-white flex-1 flex items-center justify-center p-8 min-h-[400px] lg:min-h-[500px]"
              style={{ backgroundImage: `url(${Wed})` }}
            >
              {/* Overlay wrapper */}
              <div className="w-full h-full bg-black/45 flex items-center justify-center p-6 rounded-lg backdrop-blur-[1px]">
                <h1 className="text-[32px] md:text-[50px] lg:text-[72px] cardo-regular font-bold max-w-md text-center leading-tight">
                  Authentic and bespoke Kalyanams...
                </h1>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white lg:mt-0 flex flex-col justify-center p-5 md:p-20">
            <h2 className="text-[30px] md:text-[35px] lg:text-[50px] cardo-regular font-semibold mb-4 text-[#E9744B]">
              Our Mission
            </h2>
            <p className="text-gray-700 text-[14px] md:text-[16px] raleway-font leading-relaxed">
              Our core mission is to empower every couple to experience a
              wedding day defined by absolute cultural richness, joy, and effortless
              perfection. We strive to be more than just planners; we are dedicated
              partners committed to protecting your peace of mind throughout the entire
              process, from the initial Pandhakkal pole erection to the final,
              unforgettable moment of the reception.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px] raleway-font pt-[10px] leading-relaxed">
              We achieve this by blending creative, bespoke design with
              uncompromising logistical expertise. We ensure that every
              element—be it coordinating the early morning Muhurtham priest schedule, tracking
              caterers for authentic banana leaf feasts (Kalyana Sappadu), sourcing
              traditional Nadaswaram musicians, or managing the grand Mappillai Azhaippu procession—is
              handled with transparency, professionalism, and genuine care. We promise to listen
              intently to your family traditions, translating your individual story into a
              celebration that feels deeply personal and respectful of Tamil heritage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ATwo;
