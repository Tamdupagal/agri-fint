import Image from 'next/image';
import React from 'react';
import { servicesData } from '../../public/homeData';

const Services = () => {
    return (
        <div className=' px-6 lg:px-20 bg-darkBg  text-fontclr  py-20 services-bg '>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-lg font-semibold text-primary'>What We’re Doing</p>
                <h2 className='text-6xl '>PRODUCTS WE OFFER</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 pt-20 gap-10'>
                {
                    servicesData.map(singleService => <ServiceCard key={singleService.id} singleService={singleService} />)
                }
            </div>





        </div>
    );
};

export default Services;

const ServiceCard = ({ singleService }) => {
    const { name, details, img, icon } = singleService;
    return (
        <div className='bg-cardBg border-[1px] border-cardBg hover:border-yellow  text-fontclr rounded-lg px-6 py-14 flex flex-col items-center justify-center gap-5 text-center'>
            <div>
                <Image src={img} alt={name} width={196} height={196} className="rounded-full" />
            </div>
            <h2 className='text-3xl font-bold '>{name}</h2>
            <p className='text-paraclr '>{details}</p>

        </div>
    )
}