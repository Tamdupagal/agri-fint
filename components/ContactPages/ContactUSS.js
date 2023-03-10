import React from "react";
// import Contact from '../HomePages/Contact'
import Button from "../../utilities/Button";
import { BsChatText } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsArrowUp, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { AiFillHeart, AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { MdAttachEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

const ContactUSS = () => {
  return (
    <div>
      <div className={"contact_page"}>
        <div className="text-center text-white pt-20 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / ContactUs
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="text-white  justify-between	tracking-wider lg:px-40 px-5 gap-20 pt-10 ">
        <Link
          href={
            "https://www.google.com/maps/place/FINTLIVEST/@12.9103627,77.6330549,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae149c331ccfd5:0x60545c1dd1e31f4d!8m2!3d12.9103627!4d77.6352436"
          }
        >
          <Image
            src={"/assets/google.png"}
            alt="qrcode"
            width={1200}
            height={250}
          />
        </Link>
      </div>
      <div className="text-white flex lg:flex-row flex-col justify-between	tracking-wider lg:px-40 px-5 gap-20 pt-10 ">
        <div className="flex lg:flex-row flex-col items-center gap-2 ">
          <div>
            <BsChatText className="text-3xl" />
          </div>
          <div>
            <h1 className="text-primary">Have Question?</h1>
            <h1>Free +91 9637778041</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <div>
            <MdAttachEmail className="text-3xl" />
          </div>
          <div>
            <h1 className="text-primary">Write Email</h1>
            <h1>info@fintlivest.com</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <div>
            <FiMapPin className="text-3xl" />
          </div>
          <div>
            <h1 className="text-primary">Visit Office</h1>
            <h1>Bengaluru, Karnataka 560102.</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
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
      </div>
      <div className="text-white text-center pt-20 ">
        <h1 className="text-primary text-xl py-3">Write a Message</h1>
        <p className="text-white text-5xl px-2  uppercase  ">
          Always here to help you
        </p>
        <div className="inline-block py-3">
          <Image
            className=""
            src={"/assets/section-title-icon-1.png"}
            width={54}
            height={21}
            alt="title icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUSS;
