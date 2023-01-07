import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    AiFillHeart,
    AiOutlineInstagram,
} from "react-icons/ai";
import { BsArrowUp, BsTwitter } from "react-icons/bs";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { GiFarmer } from "react-icons/gi";
import { TbBrandTelegram } from "react-icons/tb";
import Button from "../../utilities/Button";

const Footer = () => {
    const [open, setOpen] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <div>
            <footer className="flex items-center justify-between px-5 lg:px-20 bg-primary  py-10">
                <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full lg:w-2/3">
                        <div className="text-5xl  bg-[#417E2A] hover:bg-yellow hover:text-white text-yellow  w-24 h-24 rounded-full flex items-center justify-center p-7 ">
                            <span>
                                <GiFarmer />
                            </span>
                        </div>
                        <h2 className="text-center text-2xl lg:text-4xl font-bold text-white">WE’RE POPULAR LEADER IN AGRICULTURE & ORGANIC MARKET.</h2>
                    </div>  

                    <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-end">
                        <button className="px-10 lg:px-20 py-3 lg:py-6 rounded-full bg-fontclr hover:bg-cardBg hover:text-white text-black font-bold text-xl">Discover More</button>
                    </div>

                </div>
            </footer>

            <footer className="relative bg-cardBg text-paraclr pt-10  lg:pt-16 pb-32">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-14 text-left lg:text-left">
                        <div className="w-full lg:w-4/12 px-4 ">
                            <div className="flex items-start flex-col justify-start gap-1">
                                <Link href={"/"}>
                                    <Image
                                        src={"/logo2.png"}
                                        width={200}
                                        height={40}
                                        alt="logo"
                                        className="rounded-md"
                                    />
                                </Link>

                                <p className="text-xl mt-3 mb-2 text-white ">
                                    Welcome to our Agriculture Farming. Lorem simply text amet cing elit.
                                </p>



                            </div>
                        </div>

                        <div className="w-full lg:w-8/12 text-paraclr">
                            <div className="flex flex-col lg:flex-row gap-10 items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto ">
                                    <span className="block uppercase text-xl text-white   font-semibold mb-5">
                                        AgriFint
                                    </span>
                                    <ul className="list-unstyled text-lg">
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary  block pb-2"
                                                href="#"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Products
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4 ml-auto ">
                                    <span className="block uppercase text-xl text-white  font-semibold mb-5">
                                        Important Links
                                    </span>
                                    <ul className="list-unstyled text-lg">
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Returns Calculator
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                FAQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Signup
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="font-semibold hover:text-primary block pb-2"
                                                href="#"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-4/12 px-4 ml-auto ">
                                    <span className="block uppercase text-xl text-white  font-semibold mb-5">
                                        Contact us
                                    </span>
                                    <ul className="list-unstyled text-lg font-semibold">
                                        <li>
                                            <p className="text-primary ">+91-7231844455</p>
                                        </li>
                                        <li>
                                            <p className="text-primary my-2">info@agrifint.com</p>
                                        </li>
                                        <li>
                                            <p >S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura Bypass, Jaipur RJ 302018</p>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex bg-dark flex-col lg:flex-row  justify-between items-center px-5 py-5 lg:py-2 font-semibold gap-3 absolute bottom-5 right-0 left-32 rounded-l-lg">
                    <div className="flex items-center gap-5">
                        <span onClick={()=>scrollToTop()} className="bg-primary hover:bg-white hover:text-primary text-white cursor-pointer text-4xl p-10 rounded-l-lg"><BsArrowUp /></span>
                        <p>
                            &copy; Copyright 2022 by <span className="text-paraclr hover:text-white cursor-pointer">Agrfint.com</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3  mt-5">
                        <div className="text-2xl  bg-darkBg hover:bg-fontclr text-white hover:text-primary  icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
                            <span>
                                <Link href={"#"}>
                                    <BsTwitter />
                                </Link>
                            </span>
                        </div>

                        <div className="text-2xl  bg-darkBg hover:bg-fontclr text-white hover:text-primary  icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
                            <span>
                                <Link href={"#"}>
                                    <FaFacebookF />
                                </Link>
                            </span>
                        </div>

                        <div className="text-2xl  bg-darkBg hover:bg-fontclr text-white hover:text-primary   icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
                            <span>
                                <Link href={"#"}>
                                    <TbBrandTelegram />
                                </Link>
                            </span>
                        </div>

                        <div className="text-2xl  bg-darkBg hover:bg-fontclr text-white hover:text-primary  icon-bg w-10 h-10 rounded-full flex items-center justify-center mb-3 ">
                            <span>
                                <Link href={"#"}>
                                    <AiOutlineInstagram />
                                </Link>
                            </span>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;