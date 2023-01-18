import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillPhone, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  BsCart3,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsSearch,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoLocation } from "react-icons/go";

// className={ `rounded-md  ${ navbar ? "hidden" : "flex" }` }

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };


  useEffect(() => {
    changeNav();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNav);
  });

  const memuItems = (
    <>
      <li className="text-paraclr hover:text-fontclr  text-base	">
        <Link href={"/"} className="flex items-center">
          <span>Home</span>
        </Link>
      </li>
      <li className="text-paraclr hover:text-fontclr text-base	 ">
        <Link href={"/about"} className="flex items-center">
          <span>About Us</span>
        </Link>
      </li>
      <li className="text-paraclr  hover:text-fontclr dropdown text-base	">
        <a className="flex items-center cursor-pointer">
          <span>Products</span>
        </a>
        <div className="dropdown-menu  absolute h-auto hidden pt-6  pb-6">
          <ul className="flex flex-col bg-dark items-start gap-3  shadow px-5 py-8 w-64 rounded-lg text-xl">
            <li className="py-2 head-hover-link px-5  ">
              <Link
                href={"/products/product1"}
                className="block text-white font-bold text-base  hover:text-red dropdown cursor-pointer"
              >
                <span className="flex flex-row items-center gap-2 text-paraclr hover:text-fontclr	">
                  <span>Fresh Harvest</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>
              </Link>
            </li>
            <li className="py-2 head-hover-link px-5">
              <Link
                href={"/products/product2"}
                className="block text-white font-bold text-base  hover:text-tomato dropdown cursor-pointer"
              >
                <span className="flex flex-row items-center gap-2	text-paraclr hover:text-fontclr">
                  <span>Sowing seeds</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>
              </Link>
            </li>
            <li className="py-2 head-hover-link px-5">
              <Link
                href={"/products/product3"}
                className="block text-white font-bold text-base  hover:text-tomato dropdown cursor-pointer"
              >
                <span className="flex flex-row items-center gap-2 text-paraclr hover:text-fontclr ">
                  <span>Agro Gain</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>{" "}
              </Link>
            </li>
            <li className="py-2 head-hover-link px-5">
              <Link
                href={"/products/product4"}
                className="block text-white font-bold text-base  hover:text-tomato dropdown cursor-pointer"
              >
                <span className="flex flex-row items-center gap-2 text-paraclr hover:text-fontclr	">
                  <span>AGventure</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </li>

      {/*  <li className="text-paraclr hover:text-fontclr text-base	">
        <Link href={"#"} className="flex items-center">
          <span>Pages</span>
        </Link>
      </li> */}
      <li className="text-paraclr hover:text-fontclr text-base	 ">
        <Link href={"/shop"} className="flex items-center">
          <span>Shop</span>
        </Link>
      </li>
      <li className="text-paraclr hover:text-fontclr text-base	 ">
        <Link href={"/contact"} className="flex items-center">
          <span>Contact Us</span>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <header
        className={`bg-dark text-fontclr w-full px-6 lg:px-20 pt-3 pb-3  flex  items-center justify-between gap-20  shadow-lg   z-50 ease-in duration-300 fixed  ${
          navbar ? "h-20" : "h-20 lg:h-36"
        }`}
      >
        <Link href={"/"}>
          <Image src={"/logo3.png"} width={170} height={0} alt="logo" />
          {/* <h2 className='text-3xl font-bold  '>AgroFint</h2> */}
        </Link>

        <div className="lg:flex flex-col w-full gap-4 hidden ">
          <div
            className={`flex items-center justify-between bg-cardBg w-full rounded-full h-12 ${
              navbar ? "hidden" : "flex"
            }`}
          >
            <div className="flex items-center gap-4 ml-10 text-sm	 ">
              <p className="flex items-center gap-2">
                {" "}
                <BsEnvelope className="text-yellow" />{" "}
                <span className="text-fontclr hover:text-yellow">
                  info@fintlivest.com
                </span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <GoLocation className="text-yellow" />{" "}
                <span>Bengaluru, Karnataka 560102, India </span>
              </p>
            </div>
            <div className="flex items-center gap-3 mr-10">
              <Link href={"#"}>
                <BsTwitter className="text-fontclr hover:text-yellow" />
              </Link>
              <Link href={"https://www.facebook.com/Fintlivest/"}>
                <BsFacebook className="text-fontclr hover:text-yellow" />
              </Link>
              <Link href={"#"}>
                <BsTelegram className="text-fontclr hover:text-yellow" />
              </Link>
              <Link
                href={
                  "https://instagram.com/wearefintlivest?igshid=Yzg5MTU1MDY="
                }
              >
                <BsInstagram className="text-fontclr hover:text-yellow" />
              </Link>
              <Link href={"https://www.linkedin.com/company/76233333/admin/"}>
                <AiFillLinkedin className="text-fontclr hover:text-yellow" />
              </Link>
            </div>
          </div>
          <ul className="hidden px-24  lg:flex lg:flex-row justify-between items-center  text-xl font-semibold ">
            {memuItems}
            {/* <div className="flex items-center gap-10 text-2xl">
              <Link href={"#"} className="text-fontclr hover:text-yellow">
                <BsSearch />
              </Link>
              <Link href={"#"} className="text-fontclr hover:text-yellow">
                <BsCart3 />
              </Link>
            </div>
  */}{" "}
          </ul>
        </div>

        <div className={`   ${navbar ? "hidden" : " hidden lg:block"}`}>
          <li className="icon facebook">
            <span className="tooltip">+91 9637778041</span>
            <span>
              <AiFillPhone />
            </span>
          </li>
        </div>

        {/*   Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="block lg:hidden text-yellow"
        >
          {!open ? (
            <AiOutlineMenu className="text-4xl" />
          ) : (
            <AiOutlineClose className="text-4xl" />
          )}
        </button>
      </header>

      {open ? (
        <div className="bg-dark  rounded w-full  py-3 z-10 fixed mt-20">
          <ul className=" lg:hidden flex flex-col  items-center pb-12 gap-8 pt-12 px-5 text-lg	 ">
            {memuItems}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
