import Image from 'next/image';
import React from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { achivementData } from '../../public/homeData';
import Button from '../../utilities/Button';

const Success = () => {
    return (
        <div className=' bg-dark text-white  px-8 lg:px-24 flex flex-col items-center justify-center   py-10'>

            <div className='flex flex-col items-center gap-3 py-14 mb-10'>
                <p className='text-lg font-semibold text-primary'>WHAT ARE WE PROUD ABOUT?</p>
                <h2 className='text-6xl '>Agriculture Sector is growing rapidly.</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>

            <div className='flex flex-col lg:flex-row  items-center justify-between gap-5 w-full mb-10'>
                {
                    achivementData.map(singleData => {
                        const { id, name, number, unit, icon } = singleData;
                        return (
                            <div key={id} className="flex items-center  gap-5 w-full">
                                <Image src={icon} alt={name} width={100} height={50} />
                                <div>
                                    <h3 className='text-2xl font-bold '>{name}</h3>
                                    <h2 className='text-5xl font-bold text-red-500'>{number}</h2>
                                    <p className='text-paraclr'>{unit}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <Button>Invest Now</Button>
            <p className='text-xl lg:text-2xl my-3 font-semibold text-center text-paraclr'>Subscribed 100% in 6 hours on Tyke Invest</p>
            <p className='text-xl lg:text-2xl mt-3font-semibold text-center text-paraclr'>Trusted by investor community spread across 10+ countries and 150+ cities</p>

        </div>
    );
};

export default Success;