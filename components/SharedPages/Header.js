import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsCart3, BsEnvelope, BsFacebook, BsInstagram, BsSearch, BsTelegram, BsTwitter } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const Header = () => {
    const [open, setOpen] = useState(false);

    const memuItems =
        <>
            <li className="text-paraclr hover:text-fontclr ">
                <Link href={"/"} className="flex items-center">
                    <span>Home</span>
                </Link>
            </li>
            <li className="text-paraclr hover:text-fontclr ">
                <Link href={"#"} className="flex items-center">
                    <span>About Us</span>
                </Link>
            </li>
            <li className="text-paraclr hover:text-fontclr ">
                <Link href={"#"} className="flex items-center">
                    <span>Products</span>
                </Link>
            </li>
            <li className='text-paraclr hover:text-fontclr '>
                <Link href={'#'} className="flex items-center">
                    <span>Pages</span>
                </Link>
            </li>
            <li className='text-paraclr hover:text-fontclr '>
                <Link href={'#'} className="flex items-center">
                    <span>Shop</span>
                </Link>
            </li>
            <li className='text-paraclr hover:text-fontclr '>
                <Link href={'#'} className="flex items-center">
                    <span>Contact Us</span>
                </Link>
            </li>
        </>
    return (
        <div>
            <header className="bg-dark text-fontclr w-full px-6 lg:px-20 pb-5 pt-2  flex items-center justify-between gap-20 fixed shadow-lg   z-50 ease-in duration-300">


                <Link href={"/"}>
                    <Image
                        src={"/logo2.png"}
                        width={150}
                        height={40}
                        alt="logo"
                        className='rounded-md'
                    />
                    {/* <h2 className='text-3xl font-bold  '>AgroFint</h2> */}
                </Link>

                <div className='flex flex-col w-full gap-4'>
                    <div className='flex items-center justify-between bg-primary w-full rounded-full h-14'>
                        <div className='flex items-center gap-4 ml-10 '>
                            <p className='flex items-center gap-2'> <BsEnvelope className='text-yellow' /> <span className='text-fontclr hover:text-yellow'>needhelp@company.com</span></p>
                            <p className='flex items-center gap-2'> <GoLocation className='text-yellow' /> <span>80 Broklyn Golden Street USA</span></p>
                        </div>
                        <div className='flex items-center gap-3 mr-10'>
                            <BsTwitter className='text-fontclr hover:text-yellow'/>
                            <BsFacebook className='text-fontclr hover:text-yellow'/>
                            <BsTelegram className='text-fontclr hover:text-yellow'/>
                            <BsInstagram className='text-fontclr hover:text-yellow'/>
                        </div>

                    </div>
                    <ul className="hidden  lg:flex lg:flex-row justify-between items-center gap-10 text-xl font-semibold ">
                        {memuItems}
                        |
                        <div className='flex items-center gap-10 text-3xl'>
                            <Link href={"#"} className='text-fontclr hover:text-yellow'><BsSearch /></Link>
                            <Link href={"#"} className='text-fontclr hover:text-yellow'><BsCart3 /></Link>
                        </div>
                    </ul>
                </div>

                <div>
                    <li class="icon facebook">
                        <span class="tooltip">+9988-5455445</span>
                        <span><AiFillPhone /></span>
                    </li>
                </div>




                {/*   Menu Icon */}
                <button onClick={() => setOpen(!open)} className="block lg:hidden text-chardark">
                    {!open ? (
                        <AiOutlineMenu className="text-4xl" />
                    ) : (
                        <AiOutlineClose className="text-4xl" />
                    )}
                </button>
            </header>

            {open ? (
                <div className="bg-dark rounded w-full  py-7 z-10 fixed">
                    <ul className=" lg:hidden flex flex-col items-start gap-5 pt-20 px-5">
                        {memuItems}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Header;