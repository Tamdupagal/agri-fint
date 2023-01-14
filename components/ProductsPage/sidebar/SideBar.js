import Link from "next/link";
import React from "react";
// import { VscFilePdf } from "react-icons/vsc";
// import { GrDocumentTxt } from "react-icons/gr";
// import { AiOutlinePlus } from "react-icons/ai";

const SideBarCard = () => {
  const sideNavItems = (
    <div>
      <li className=" text-white  py-3 px-8 rounded-xl ">
        <h2 className="flex items-center">All Products</h2>
      </li>
      <li className=" hover:text-white text-paraclr  py-3 px-8 rounded-xl dropdown sideHead">
        <Link href={"/products/product1"} className="flex items-center">
          <span>Fresh Harvest</span>
        </Link>
      </li>
      <li className=" hover:text-white text-paraclr  py-3 px-8 rounded-xl  ease-in duration-300 sideHead">
        <Link href={"/products/product2"} className="flex items-center">
          <span>Sowing seeds</span>
        </Link>
      </li>
      <li className=" hover:text-white text-paraclr  py-3 px-8 rounded-xl ease-in duration-300 sideHead">
        <Link href={"/products/product3"} className="flex items-center">
        <span>Agro Gain</span>
        </Link>
        </li>
        <li className=" hover:text-white text-paraclr  py-3 px-8 rounded-xl ease-in duration-300 sideHead">
        <Link href={"/products/product4"} className="flex items-center">
        <span>AGventure</span>
        </Link>
      </li>
    </div>
  );

  return (
    <div className="bg-cardBg text- text-xl rounded-xl  py-4 px-5 font-semibold  w-93">
          <ul className="flex flex-col w-full ">{ sideNavItems }</ul>
    </div>
  );
};

export default SideBarCard;






