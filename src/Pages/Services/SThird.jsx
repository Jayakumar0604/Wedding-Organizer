import React from "react";
import ServiceDetailRow from "../../Components/Common/ServiceDetailRow";
import Fpic from "../../assets/services.webp";
import Ppic from "../../assets/services-2.webp";
import Epic from "../../assets/services-3.webp";
import Dpic from "../../assets/services-4.webp";

const SThird = () => {
  const services = [
    {
      title: "Muzhu Nirvagam (Full Planning)",
      description:
        "We manage everything from the engagement to the final reception: budget, venue choice, custom stage decor, traditional catering, and logistics. Enjoy a completely stress-free planning journey with meticulous, personalized guidance at every ritual, ensuring your family traditions are honored perfectly.",
      image: Fpic,
      reverse: false,
    },
    {
      title: "Nalangu & Pre-Wedding Design",
      description:
        "Dedicated support for traditional pre-wedding events. We organize beautiful marigold floral swings, traditional songs, applying turmeric paste (Manjal), games (like searching for the ring in a pot of milk), and ensure a lively, culturally rich gathering for families to connect.",
      image: Ppic,
      reverse: true,
    },
    {
      title: "Muhurtham Day Coordination",
      description:
        "Auspicious wedding days can be intense, starting at pre-dawn hours. We provide expert on-site coordination to manage priest timelines, Nadaswaram bands, welcome gifts, saree styling updates, and guide the bride, groom, and parents calmly through every sacred step.",
      image: Epic,
      reverse: false,
    },
    {
      title: "Heritage & Destination Weddings",
      description:
        "Planning your dream wedding at historical temple towns like Madurai, heritage palaces in Chettinad, or coastal resorts in Mahabalipuram. We manage heritage venue layouts, traditional food catering, guest travel arrangements, and local vendors for a royal Tamil wedding experience.",
      image: Dpic,
      reverse: true,
    },
  ];

  return (
    <>
      <section className="bg-[#f6f2f1] py-16">
        <div className="max-w-6xl mx-auto space-y-24 px-4">
          {services.map((service, index) => (
            <ServiceDetailRow
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              reverse={service.reverse}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SThird;
