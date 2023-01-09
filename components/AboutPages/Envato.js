import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const envato = () => {
  return (
    <div className=" md:px-10 lg:px-20 bg-primary text-fontclr py-10 ">
      <div className="py-5">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          slidesPerView={5}
          loop={true}
          loopFillGroupWithBlank={true}
        >
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hover:bg-gray-300 transition-all duration-500"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/brand/brand-1-5.png"
              alt="..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default envato;
