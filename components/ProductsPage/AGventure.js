import React from "react";
import Image from "next/image";
import SideBar from "./sidebar/SideBar";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Product4 = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page"}>
        <div className="text-center text-white pt-16 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / AGventure
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">AGventure</h2>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-start justify-between gap-10 pt-12  lg:pt-16 my-16 px-5 lg:px-48 ">
        <div className="w-full lg:w-1/3 gap-10 flex flex-col ">
          <SideBar />
          <SideBarCard2 />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="  image-container">
            <div className="img-head1">
              <Image
                src={"/assets/product-details-img-1.jpg"}
                alt="features"
                layout="fill"
                className="rounded-lg image"
              />
            </div>
            <div className="img-head">
              <FaHandHoldingUsd />
            </div>
          </div>
          <h1 className="py-2 text-4xl font-bold text-white ">
            Harvest Innovation TO AGventure
          </h1>
          <p className="text-md leading-8 text-white py-5">
            Agriculture, as we know is the main livelihood of majority of
            families in rural and suburban areas all over the world. There are
            many ways to earn good income in agriculture. If you have a piece of
            land, no matter how big or small it is, you can start farming.
          </p>
          <p className="text-md leading-8 text-white py-5">
            With growing purchasing power, investors in India are now searching
            for innovative ideas to earn returns from their investments. One
            such way is investing in agricultural land. While some investors
            keep such land as an asset, there is a section of investors who
            leverage the growing market of organic fruits and vegetables, to
            supplement their income. A number of experts have agreed that farm
            investment is a safe option for parking one’s funds as the return on
            investment is usually higher than other investments and also lends
            safety to investors’ money. Also termed as agrorealty, the market
            for such investors is growing, especially after the pandemic.
          </p>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white">
              Grande 2 annual investment plan
            </p>
          </div>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white ">Fixed return</p>
          </div>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white ">
              Payout frequency - quarterly
            </p>
          </div>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white ">Easy short lockin</p>
          </div>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white ">Tax benefited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product4;

const SideBarCard2 = () => {
  return (
    <div className="bg-cardBg text-white text-xl text-center rounded-xl  py-10  px-5 font-semibold  w-93">
      <h1 className="text-4xl py-5 px-5 uppercase">
        we are scaling our Agrifint product{" "}
      </h1>
      <div className="img-head11 py-5">
        <FaHandHoldingUsd />
      </div>
      <h1 className="py-3 text-lg">Lorem ipsum Lorem ipsum</h1>
      <h1 className="py-1 text-xl ">+989875756343</h1>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="gap-5 flex flex-col cursor-pointer ">
      <details className="text-white py-6 px-5 bg-darkBg rounded-xl border-l-white">
        <summary>Hello Agrifint</summary>
        <p>this is cool idea to make a Accordion</p>
      </details>
      <details className="text-white py-6 px-5 bg-darkBg rounded-xl">
        <summary>Hello Agrifint</summary>
        <p>this is cool idea to make a Accordion</p>
      </details>
      <details className="text-white py-6 px-5 bg-darkBg rounded-xl">
        <summary>Hello Agrifint</summary>
        <p>this is cool idea to make a Accordion</p>
      </details>
      <details className="text-white py-6 px-5 bg-darkBg rounded-xl">
        <summary>Hello Agrifint</summary>
        <p>this is cool idea to make a Accordion</p>
      </details>
    </div>
  );
};
