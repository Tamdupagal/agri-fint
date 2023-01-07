import Image from 'next/image';
import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import Button from '../../utilities/Button';

const HomeAbout = () => {
    return (
        <div className=' px-6 lg:px-20 bg-dark text-fontclr  py-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative'>
            <div className='w-full lg:w-3/5'>
                <div className='flex flex-col items-start gap-3'>
                    <p className='text-lg font-semibold text-primary'>Get to Know Agrifint</p>
                    <h2 className='text-3xl lg:text-6xl '>AGRION IS THE AGRICULTURE AND ORGANIC FARM</h2>
                    <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
                </div>
                <div className='text-start pt-10'>
                    <p className='text-2xl font-semibold text-primary '>We’ve 20 years of agriculture farming experience.</p>
                    <p className='text-paraclr text-xl py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dolore veniam.</p>

                    <div className='py-10'>
                        <div className='flex items-center'>
                            <BsCheck2 className='text-yellow text-3xl font-bold mr-3' />
                            <p className='text-xl text-fontclr'>There are many variations of passage of lorem.</p>
                        </div>
                        <div className='flex items-center'>
                            <BsCheck2 className='text-yellow text-3xl font-bold mr-3' />
                            <p className='text-xl text-fontclr'>Available but the majority alteration.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <Button>About More</Button>
                        <Image src={"/assets/about-one-ceo-img.jpg"} width={65} height={65} alt="title icon" className='rounded-full ml-5' />
                        <div>
                            <h3 className='text-yellow text-xl lg:text-3xl font-bold '>Mike Hardson</h3>
                            <p className='text-md italic'>CEO of Agrifint</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full lg:w-2/5 relative'>
                <div className='relative flex justify-end'>
                    <div className='bg-yellow h-[450px] w-96 rounded-md z-0 mt-5'>

                    </div>
                    <Image
                        src={"/assets/about-one-img-1.jpg"}
                        alt="features"
                        width={438}
                        height={580}
                        className="rounded-lg image absolute top-0 z-1   right-8"
                    />

                    <Image
                        src={"/assets/about-one-img-2.jpg"}
                        alt="features"
                        width={302}
                        height={332}
                        className="rounded-lg image z-10  absolute -bottom-28 left-0"
                    />

                </div>


            </div>

        </div>
    );
};

export default HomeAbout;