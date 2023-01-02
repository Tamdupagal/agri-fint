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
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
    const [open, setOpen] = useState(false);
    return (
        <footer className="relative bg-cardBg text-paraclr pt-10  lg:pt-16 ">
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

            <div className=" flex bg-dark flex-col lg:flex-row  justify-between items-center px-2 lg:px-20 py-5 lg:py-2 font-semibold gap-3">
                <div className="flex items-center gap-5">
                    <span className="bg-primary text-white cursor-pointer text-4xl p-10 rounded-l-lg"><BsArrowUp /></span>
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
    );
};

export default Footer;