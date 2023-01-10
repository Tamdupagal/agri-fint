import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { AiOutlinePlus } from 'react-icons/ai';
import { accordionData } from '../../public/homeData';

const StartSteps = () => {
    return (
        <div className='px-6 lg:px-36 bg-dark text-fontclr  py-14'>
            <div className='flex flex-col items-center text-center'>
                <p className='text-xl font-semibold text-primary capitalize'>How To Get Started?</p>
                <h2 className='text-3xl lg:text-5xl my-3 uppercase'>Start investing in 4 simple steps</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>
            <div className='mt-10'>
                <AccordionCard />
            </div>

        </div>
    );
};

export default StartSteps;



const AccordionCard = () => {
    const [id, setId] = useState('');

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between '>
            <div className='w-full lg:w-1/2'>
                <AccordionImg id={id} />
            </div>
            <Accordion className='pt-10 w-full lg:w-1/2 flex flex-col gap-2'>
                {accordionData.map((item) => (
                    <AccordionItem key={item.id} onClick={() => setId(item.id)}>
                        <AccordionItemHeading className='bg-cardBg text-white p-7 rounded-md'>
                            <AccordionItemButton>
                                {item.header}
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel className='bg-darkBg text-white p-7 rounded-sm'>
                            {item.details}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>


        </div>
    )
};

const AccordionImg = ({ id }) => {

    const filterItem = accordionData.find(img => id === img.id || id === 222);
    // console.log(filterItem);
    return (
        <div>{
            filterItem ?
                <Image
                    src={filterItem?.img}
                    alt={"img"}
                    width={384}
                    height={590}
                    className="about-img h-full rounded-lg"
                /> :
                <Image
                    src={"/assets/steps/step-1.png"}
                    alt={"img"}
                    width={384}
                    height={590}
                    className="about-img h-full rounded-lg"
                />

        }

        </div>
    )
}