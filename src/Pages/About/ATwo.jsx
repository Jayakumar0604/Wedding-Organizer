import React from "react";
import About from "../../assets/images/bg-overlay-01-free-img.png";
import Wed from "../../assets/images/wedding.webp";
const ATwo = () => {
  return (
    <>
      <div className="w-full  bg-[#f0eded]">
        <div className="flex flex-col md:flex-row ">
          <div className="raleway-font px-[30px] text-[14px] md:text-[16px] md:min-w-md">
            <h1 className="text-[46px] md:text-[128px] cardo-regular pb-[20px]">
              About
            </h1>
            <h3 className="pb-[20px]">
              We believe every couple deserves a wedding as unique as their
              love. Founded on a commitment to flawless execution and genuine
              partnership, our mission is to remove the stress from planning so
              you can cherish the journey. Our dedicated team, led by
              experienced directors, approaches every celebration with passion
              and meticulous attention to detail. From the grand vision to the
              smallest logistical element, we ensure a seamless and joyful
              experience. We are here to transform your dreams into an
              unforgettable reality that reflects your personal style and story.
            </h3>
            <h4 className="pb-[20px]">
              We are passionate about turning your wedding vision into a
              magnificent reality. Our foundation is built on meticulous
              planning, creative design, and a dedication to client peace of
              mind. We believe your celebration should be joyful and
              stress-free. Trust our expertise to deliver a stunning, perfectly
              executed event that beautifully honors your unique love story.
            </h4>
          </div>
          <div
            style={{ backgroundImage: `url(${About})` }}
            className="w-full lg:min-w-md bg-cover"
          ></div>
        </div>
        <div className="min-h-screen grid lg:space-x-3 grid-cols-1 xl:grid-cols-2 lg:py-10">
          {/* Left Section */}
          <div>
            <div
              className="bg-cover bg-center text-white flex  items-center justify-center p-8"
              style={{ backgroundImage: `url(${Wed})` }}
            >
              {/* Overlay wrapper */}
              <div className="w-full h-full bg-black/40 flex items-center justify-center">
                <h1 className="text-[40px] md:text-[62px] lg:text-[100px] cardo-regular font-bold max-w-md text-center">
                  Unique and bespoke weddings...
                </h1>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white lg:mt-20 flex flex-col justify-center p-5 md:p-30">
            <h2 className="text-[30px] md:text-[35px] lg:text-[50px] cardo-regular font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-[14px] md:text-[16px] raleway-font leading-relaxed">
              Our core mission is to empower every couple to experience a
              wedding day defined by absolute joy and effortless perfection. We
              strive to be more than just planners; we are dedicated partners
              committed to protecting your peace of mind throughout the entire
              process, from the initial concept to the final, unforgettable
              moment.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px] raleway-font pt-[10px] leading-relaxed">
              We achieve this by blending creative, bespoke design with
              uncompromising logistical expertise. We ensure that every
              element—be it vendor selection, timeline management, budget
              tracking, or theme execution—is handled with transparency,
              professionalism, and genuine care. We promise to listen intently
              to your vision, translating your individual love story and style
              into a celebration that feels deeply personal and authentic. Our
              work is a relentless pursuit of excellence, eliminating stress and
              complexity so you can fully immerse yourselves in the love and
              laughter of your celebration. Our greatest reward is witnessing
              the moment you realize your dreams have been flawlessly brought to
              life. We deliver sophisticated, memorable, and absolutely seamless
              weddings, every single time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ATwo;
