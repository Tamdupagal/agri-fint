import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
        <div className="dropdown-menu  absolute h-auto hidden pt-6 pb-6">
          <ul className="flex flex-col bg-dark items-start gap-3   shadow px-5 py-10 w-64 rounded-lg text-xl">
            <li className="py-2 head-hover-link px-5  ">
              <Link
                href={"/products/product1"}
                className="block text-white font-bold text-base  hover:text-red dropdown cursor-pointer"
              >
                <span className="flex flex-row items-center gap-2 text-paraclr hover:text-fontclr	">
                  <span>Agrifint Product1</span>
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
                  <span>Agrifint Product2</span>
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
                <span className="flex flex-row items-center gap-2 text-paraclr hover:text-fontclr	">
                  <span>Agrifint Product3</span>
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
                  <span>Agrifint Product4</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="text-paraclr hover:text-fontclr text-base	">
        <Link href={"#"} className="flex items-center">
          <span>Pages</span>
        </Link>
      </li>
      <li className="text-paraclr hover:text-fontclr text-base	 ">
        <Link href={"#"} className="flex items-center">
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
          navbar ? "h-16" : "h-20 lg:h-36"
        }`}
      >
        <Link href={"/"}>
          <Image
            src={"/logo3.png"}
            width={250}
            height={0}
            alt="logo"
            className={ `rounded-md  ${ navbar ? "hidden" : "flex" }` }
            
          />
          {/* <h2 className='text-3xl font-bold  '>AgroFint</h2> */}
        </Link>

        <div className="lg:flex flex-col w-full gap-4 hidden ">
          <div
            className={`flex items-center justify-between bg-cardBg w-full rounded-full h-10 ${
              navbar ? "hidden" : "flex"
            }`}
          >
            <div className="flex items-center gap-4 ml-10 text-sm	 ">
              <p className="flex items-center gap-2">
                {" "}
                <BsEnvelope className="text-yellow" />{" "}
                <span className="text-fontclr hover:text-yellow">
                  needhelp@company.com
                </span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <GoLocation className="text-yellow" />{" "}
                <span>80 Broklyn Golden Street USA</span>
              </p>
            </div>
            <div className="flex items-center gap-3 mr-10">
              <BsTwitter className="text-fontclr hover:text-yellow" />
              <BsFacebook className="text-fontclr hover:text-yellow" />
              <BsTelegram className="text-fontclr hover:text-yellow" />
              <BsInstagram className="text-fontclr hover:text-yellow" />
            </div>
          </div>
          <ul className="hidden  lg:flex lg:flex-row justify-between items-center gap-10 text-xl font-semibold ">
            {memuItems}|
            <div className="flex items-center gap-10 text-2xl">
              <Link href={"#"} className="text-fontclr hover:text-yellow">
                <BsSearch />
              </Link>
              <Link href={"#"} className="text-fontclr hover:text-yellow">
                <BsCart3 />
              </Link>
            </div>
          </ul>
        </div>

        <div className={`   ${navbar ? "hidden" : " hidden lg:block"}`}>
          <li className="icon facebook">
            <span className="tooltip">+9988-5455445</span>
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
          <ul className=" lg:hidden flex flex-col items-start gap-5 pt-20 px-5 text-base	 ">
            {memuItems}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
