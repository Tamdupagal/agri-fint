import React, { useRef, useState } from "react";
import Button from "../../utilities/Button";
import { GoLocation } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import "animate.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import { TbPlant, TbRelationOneToOne } from "react-icons/tb";
import { BsBarChartLine } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="h-[110vh]  pt-10 lg:pt-32 bg-dark">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        direction={"vertical"}
       
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide2 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

const BannerSlide1 = () => {
  return (
    <div className="banner-slide banner-slide1 flex flex-col items-center justify-center px-6 lg:px-20">
      <BannerCard />
    </div>
  );
};
const BannerSlide2 = () => {
  return (
    <div className="banner-slide banner-slide2 flex items-center justify-center px-6 lg:px-20">
      <BannerCard />
    </div>
  );
};
const BannerSlide3 = () => {
  return (
    <div className="banner-slide banner-slide3 flex items-center justify-center px-6 lg:px-20">
      <BannerCard />
    </div>
  );
};

const BannerCard = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full pt-40">
      <div className="flex flex-col  items-center justify-center w-full">
        <div className="flex items-center justify-center mt-10 animate__animated animate__slideInDown">
          <div className="text-center text-fontclr font-bold">
            <p className=" text-2xl  -mb-10">Invest in nature’s lap</p>
            <h1 className="text-[80px] lg:text-[170px] my-5 ">Agrifint.</h1>
          </div>
        </div>

        <Button className="animate__animated animate__slideOutUp main_btn">
          Discover more
        </Button>
      </div>

      <div className="flex flex-col items-center justify-between w-full pt-10 pb-20">
        {/* <hr className="h-[0.5px] bg-fontclr w-4/6 my-10 " /> */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full  ">
          <div className="flex items-center gap-5 ">
            <TbPlant className="text-yellow text-2xl lg:text-4xl font-bold" />
            <div className="text-xl lg:text-2xl font-semibold text-fontclr text-start">
              <h2>Gathered farming</h2>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <TbRelationOneToOne className="text-yellow text-2xl lg:text-4xl font-bold" />
            <div className="text-xl lg:text-2xl font-semibold text-fontclr text-start">
              <h2>Investments in agriculture</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <BsBarChartLine className="text-yellow text-2xl lg:text-4xl font-bold" />
            <div className="text-xl lg:text-2xl font-semibold text-fontclr text-start">
              <h2>Fixed returns</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
