import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Client1 from "../../assets/Sliders/slide-1.jpg";
import Client2 from "../../assets/Sliders/slide-2.jpg";
import Client3 from "../../assets/Sliders/slide-3.jpg";
import Client4 from "../../assets/Sliders/slide-4.jpg";
import Client5 from "../../assets/Sliders/slide-5.jpg";
import Client6 from "../../assets/Sliders/slide-6.jpg";

const Slider = () => {
  const images = [Client1, Client2, Client3, Client4, Client5, Client6];
  return (
    <div className="w-full max-w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
      >
        {images.map(
          (_, index) =>
            index < images.length - 3 && (
              <SwiperSlide key={index}>
                <div className="flex gap-2 justify-center md:hidden p-10 ">
                  {images.slice(index, index + 1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`slide ${index + i}`}
                      className="w-40 object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
                <div className="hidden md:flex gap-2 justify-center p-20">
                  {images.slice(index, index + 4).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`slide ${index + i}`}
                      className="w-40 lg:w-60 xl:w-80 object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
