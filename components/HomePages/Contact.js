import Image from 'next/image';
import React from 'react';
import { BsCheck2, BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import Button from '../../utilities/Button';

const Contact = () => {
    return (
        <div className='px-6 lg:px-20 bg-darkBg text-fontclr   py-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='w-full lg:w-2/6'>
                <div className='flex flex-col items-start gap-3'>
                    <p className='text-lg font-semibold text-primary'>Contact Now</p>
                    <h2 className='text-4xl '>GET IN TOUCH NOW</h2>
                    <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
                </div>
                <div className='mt-10'>
                    <p className='text-lg text-paraclr'>Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,
                        quam ut finibus ultrices.</p>

                    <div className='mt-10'>
                        <div className='flex items-center gap-4'>
                            <div className='text-2xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center'>
                                <span> <BsFillTelephoneFill /></span>
                            </div>
                            <div>
                                <p className='text-lg text-paraclr font-semibold'>Have Question?</p>
                                <h3 className='text-2xl text-fontclr font-bold'>Free +92 (8800)-9850</h3>
                            </div>
                        </div>


                        <div className='flex items-center gap-4 my-5'>
                            <div className='text-2xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center'>
                                <span> <BsEnvelopeFill /></span>
                            </div>
                            <div>
                                <p className='text-lg text-paraclr font-semibold'>Write Email</p>
                                <h3 className='text-2xl text-fontclr font-bold'>needhelp@company.com</h3>
                            </div>
                        </div>


                        <div className='flex items-center gap-4'>
                            <div className='text-2xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center'>
                                <span> <MdLocationOn /></span>
                            </div>
                            <div>
                                <p className='text-lg text-paraclr font-semibold'>Visit Now</p>
                                <h3 className='text-2xl text-fontclr font-bold'>88 Broklyn Golden Street. USA</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-full lg:w-4/6 '>
                <div className='bg-cardBg rounded-lg  w-full p-10'>
                    <form>
                        <div className='flex flex-col lg:flex-row items-center gap-14'>
                            <input type="text" placeholder='Your Name' className='bg-dark text-paraclr px-10 w-full py-5 rounded-lg' />
                            <input type="email" placeholder='Email Address' className='bg-dark text-paraclr px-10 w-full py-5 rounded-lg' />
                        </div>
                        <textarea name="" id="" cols="20" rows="10" placeholder='Write a Message' className='bg-dark text-paraclr px-10 w-full py-5 rounded-lg my-8'></textarea>

                        <Button>Send a Message</Button>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default Contact;