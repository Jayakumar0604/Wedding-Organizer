import React from "react";
import Fpic from "../../assets/services.webp";
import Ppic from "../../assets/services-2.webp";
import Epic from "../../assets/services-3.webp";
import Dpic from "../../assets/services-4.webp";

const SThird = () => {
  const services = [
    {
      title: "Full Planning",
      description:
        "We manage everything: budget, vendors, design, and logistics—from engagement to final send-off. Enjoy a completely stress-free planning journey with meticulous, personalized guidance every step of the way.",
      image: Fpic,
      reverse: false,
    },
    {
      title: "Bridal Assistance",
      description:
        "Dedicated, expert support on your wedding day. We handle last-minute touch-ups, schedule management, personal item organization, and ensure the bride and bridal party feel calm and radiant.",
      image: Ppic,
      reverse: true,
    },
    {
      title: "Express Wedding",
      description:
        "Perfect for shorter timelines. We fast-track vendor selection, finalize all logistics, and deliver a stunning, sophisticated wedding experience in under four months without compromising quality.",
      image: Epic,
      reverse: false,
    },
    {
      title: "Destination Wedding",
      description:
        "Planning your dream wedding anywhere in the world. We manage travel logistics, local vendors, legal requirements, and guest experience, ensuring a seamless, unforgettable international celebration.",
      image: Dpic,
      reverse: true,
    },
  ];

  return (
    <>
      <section className="bg-[#f6f2f1] py-16">
        <div className="max-w-6xl mx-auto space-y-20 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                service.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Text Box */}
              <div className={`md:w-1/2 bg-white shadow-lg p-10 md:absolute ${service.reverse ? "md:left-10 md:-bottom-10" : "md:right-10 md:-bottom-10" }`} >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-[2px] bg-black"></div>
                  <h2 className="text-3xl md:text-[35px] lg:text-[50px] cardo-regular">{service.title}</h2>
                </div>
                <p className="text-gray-600 text-[14px] lg:text-[16px] raleway-font mb-6">
                  {service.description}
                </p>
                <button className="bg-black text-white raleway-font px-5 py-2 hover:bg-gray-800 transition">
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SThird;
