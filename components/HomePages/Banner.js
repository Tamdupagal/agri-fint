import React, { useRef, useState } from "react";
import Button from "../../utilities/Button";
import { GoLocation } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";


const Banner = () => {
    return (
        <div className="h-auto lg:h-[100vh] ">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}

                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><BannerSlide1 /></SwiperSlide>
                <SwiperSlide><BannerSlide2 /></SwiperSlide>
                <SwiperSlide><BannerSlide3 /></SwiperSlide>
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
    )
};
const BannerSlide2 = () => {
    return (
        <div className="banner-slide banner-slide2 flex items-center justify-center px-6 lg:px-20">

            <BannerCard />
        </div>
    )
};
const BannerSlide3 = () => {
    return (
        <div className="banner-slide banner-slide3 flex items-center justify-center px-6 lg:px-20">
            <BannerCard />
        </div>
    )
};

const BannerCard = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full h-full pt-40">
            <div className="flex flex-col  items-center justify-center w-full">
                <div className="flex items-center justify-center mt-10">
                    <div className="text-center text-fontclr font-bold">
                        <p className=" text-2xl  -mb-10">We are Producing Natural Products</p>
                        <h1 className=" text-[170px] ">Agriculture.</h1>
                    </div>
                </div>

                <Button>Discover</Button>

            </div>


            <div className="flex flex-col items-center justify-between w-full  ">
                {/* <hr className="h-[0.5px] bg-fontclr w-4/6 my-10 " /> */}
                <div className=" flex flex-col lg:flex-row items-center justify-evenly w-full ">
                    <div className="flex items-center gap-5 p-20">
                        <FiSettings className="text-yellow text-6xl font-bold" />
                        <div className="text-3xl font-semibold text-fontclr text-start">
                            <h2>THE BEST QUALITY</h2>
                            <h2>STANDARDS</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <FiSettings className="text-yellow text-6xl font-bold" />
                        <div className="text-3xl font-semibold text-fontclr text-start">
                            <h2>A SMART ORGANIC</h2>
                            <h2>SERVICES</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <FiSettings className="text-yellow text-6xl font-bold" />
                        <div className="text-3xl font-semibold text-fontclr text-start">
                            <h2>NATURAL HEALTHY</h2>
                            <h2>PRODDUCTS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}