import React from "react";
import ServiceCard from "../../Components/Common/ServiceCard";
import WPic from "../../assets/services-03-free-img.webp";
import BPic from "../../assets/services-02-free-img.webp";
import HPic from "../../assets/services-01-free-img.webp";

const HSecond = () => {
  const data = [
    {
      id: 1,
      src: WPic,
      title: "Muzhu Nirvagam (Full Planning)",
      about:
        "Comprehensive management of your Kalyanam. From Pandhakkal and Muhurtham rituals to catering, guest logistics, and reception, we orchestrate a perfect traditional wedding.",
    },
    {
      id: 2,
      src: BPic,
      title: "Heritage & Destination Weddings",
      about:
        "Dreaming of a royal wedding in a Chettinad palace, a coastal ceremony in Mahabalipuram, or a divine celebration in Madurai? We manage logistics and heritage venue decorations seamlessly.",
    },
    {
      id: 3,
      src: HPic,
      title: "Muhurtham & Express Planning",
      about:
        "Perfect for tight auspicious schedules. We fast-track priest coordination, traditional music (Nadaswaram), floral decor, and logistics for a beautiful Muhurtham in under three months.",
    },
  ];
  return (
    <>
      <div className="bg-[#f0eded] text-center overflow-hidden px-[30px]">
        <h1 className="text-[40px] py-[40px] md:py-[0px] md:text-[100px] cardo-regular">
          Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row overflow-hidden justify-around bg-white px-4 md:px-10">
        {data?.map((items) => (
          <ServiceCard
            key={items.id}
            src={items.src}
            title={items.title}
            about={items.about}
          />
        ))}
      </div>
    </>
  );
};

export default HSecond;
