import Image from 'next/image';
import React from 'react';
import { testimonialData } from '../../public/homeData';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Testimonial = () => {
    return (
        <div className=' px-2 lg:px-32 bg-darkBg  text-fontclr  py-20 '>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg font-semibold text-primary'>Our Testimonials</p>
                <h2 className='text-3xl lg:text-5xl '>WHAT THEY’RE TAKING ABOUT</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>

            <div className='py-10'>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    breakpoints={{
                        299: {
                            slidesPerView: 1,
                        },

                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        testimonialData.map(singleTesti => <SwiperSlide key={singleTesti.id}><TestimonialCard singleTesti={singleTesti} /></SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;


const TestimonialCard = ({ singleTesti }) => {
    const { name, img, comment, designation } = singleTesti;
    return (
        <div className='relative p-10'>
            <div className='text-paraclr bg-dark border-[1px] w-96 h-[350px]  border-cardBg hover:border-primary p-8 rounded-lg '>
                <Image src={img} width={96} height={96} alt="title icon" className='rounded-full absolute top-0' />
                <div className='text-start text-lg pt-14 pb-10'>
                    <p>{comment}</p>
                </div>
                <div className='text-start bg-primary text-fontclr pl-6 rounded-lg '>
                    <h3 className=' text-3xl font-bold '>{name}</h3>
                    <p className='text-md '>{designation}</p>
                </div>

            </div>
        </div>
    )
}