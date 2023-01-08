import Image from 'next/image';
import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import { TbReceiptTax, TbRelationOneToOne } from 'react-icons/tb';
import { RxDotFilled } from 'react-icons/rx';
import { MdOutlineShowChart } from 'react-icons/md';
import Typewriter from 'typewriter-effect';
import Button from '../../utilities/Button';

const Features = () => {
    return (
        <div className='text-fontclr bg-dark px-5 lg:px-24 h-auto   flex flex-col lg:flex-row items-center justify-between py-14'>
            <div className='flex flex-col items-center lg:items-start gap-10 w-full lg:w-1/2'>
                <div>
                    <p className='text-sm lg:text-lg text-primary font-semibold mb-4 flex items-center'>
                        <span>WHAT ARE AGRIFINT INVESTMENTS LIKE?</span>
                    </p>

                    <div>
                        <h2 className='text-2xl lg:text-5xl font-bold text-yellow flex items-center gap-2 capitalize '>
                            <span className='text-chardark'>It&apos;s like a </span>
                            <Typewriter
                                options={{
                                    strings: ['Fixed Deposit', 'Mutual Fund'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <h2 className=' text-2xl lg:text-5xl font-bold my-3 capitalize'>much better one!</h2>
                    </div>
                </div>

                <div className='flex items-center justify-start gap-3  '>
                    <div>
                        <Image src={"/assets/zero.png"} alt="zero" width={260} height={120} />
                    </div>
                    <div className='text-xl font-semibold flex flex-col justify-evenly gap-14'>
                        <p>Exit Fee</p>
                        <p>Delay</p>
                        <p>Brokerage</p>
                    </div>
                </div>
                <Button className="mt-5">Invest Now</Button>
            </div>

            <div className=' w-full lg:w-1/2'>
                <FeaturesCard />
            </div>
        </div>
    );
};

export default Features;


// Features Card

const FeaturesCard = () => {
    return (
        <div className='text-lg  w-full  flex flex-col lg:flex-row justify-center items-center gap-5 mt-5'>

            <div className='flex flex-col items-center justify-center gap-5'>

                <div className='border-2 w-full lg:w-72  border-cardBg hover:border-yellow bg-cardBg text-white   flex flex-col items-center gap-1 p-7 rounded-lg hover:shadow-lg '>
                    <div className='text-3xl text-secondary bg-dark rounded-lg shadow-lg shadow-gray-400 h-14 w-14  flex items-center justify-center mb-3'>
                        <span><MdOutlineShowChart /></span>
                    </div>
                    <div className='text-start mt-3'>
                        <p className=' font-bold mb-2'>Assured Growth</p>
                        <p >We provide much higher returns than FD and several bonds.</p>
                    </div>
                </div>

                <div className='border-2 w-full lg:w-72 border-cardBg hover:border-yellow text-white bg-cardBg flex flex-col items-center gap-1 p-7 rounded-lg hover:shadow-lg'>
                    <div className='text-3xl text-secondary bg-dark rounded-lg shadow-lg shadow-gray-400 h-14 w-14  flex items-center justify-center mb-3'>
                        <span><BsShieldCheck /></span>
                    </div>
                    <div className='text-start mt-3'>
                        <p className=' font-bold mb-2'>Safe & Secure</p>
                        <p >Sales contracts, crop insurance & professional farming, ensure assured returns.</p>
                    </div>
                </div>
            </div>

            <div className='border-2 w-full lg:w-72 border-cardBg hover:border-yellow text-white bg-cardBg  flex flex-col items-center gap-1 p-7 rounded-lg hover:shadow-lg'>
                <div className='text-3xl text-secondary bg-dark rounded-lg shadow-lg shadow-gray-400 h-14 w-14  flex items-center justify-center mb-3'>
                    <span><TbRelationOneToOne /></span>
                </div>
                <div className='text-start mt-3'>
                    <p className=' font-bold mb-2'>Consistent Returns</p>
                    <p >Free from Stock market volatality. Quaterly payouts in your wallet.</p>
                </div>
            </div>



        </div>
    )
}