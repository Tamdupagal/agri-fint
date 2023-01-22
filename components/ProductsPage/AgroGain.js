import React from "react";
import Image from "next/image";
import SideBar from "./sidebar/SideBar";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Product3 = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page4"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Agro Gain{" "}
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">Agro Gain</h2>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-start justify-between gap-10 pt-16 my-16 px-5 lg:px-48 ">
        <div className="w-full lg:w-1/3 gap-10 flex flex-col ">
          <SideBar />
          <SideBarCard2 />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="  image-container">
            <div className="img-head1">
              <Image
                src={"/assets/19.png"}
                alt="features"
                layout="fill"
                className="rounded-lg image"
                
              />
            </div>
          </div>
          <h1 className="py-2 text-4xl font-bold text-white ">
            Agro Gain
          </h1>
          <p className="text-md leading-8 text-white py-5">
            Trade in agro-food products has grown strongly over the last two
            decades, reaching almost 7% in real terms annually between 2001 and
            2019. But agro-food trade isn’t just increasing, it’s becoming
            ‘global’. A growing share of agro-food trade is taking place in
            global value chains (GVCs) – agricultural and food processing value
            chains that are spread over several countries – linking agrofood
            sectors and other sectors of the economy from across the world.{" "}
          </p>
          <h1 className="py-2 text-3xl font-bold text-white capitalize ">
            Project Challenges:
          </h1>
          <p className="text-md leading-8 text-white py-5">
            This challenge requires an ecological approach to agriculture that
            is largely missing from current management and research portfolios.
            Crop and livestock production systems must be managed as ecosystems,
            with management decisions fully informed of environmental costs and
            benefits. Hence as effort to solve this, we started this on lands
            that are collectively vast where operational costs are minimised and
            the efforts of our farmers are magnified in the way of mass outputs.
          </p>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white">
              Grande annual investment plan
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

export default Product3;

const SideBarCard2 = () => {
  return (
    <div className="bg-cardBg text-white text-xl text-center rounded-xl  py-10  px-5 font-semibold  w-93">
      <h1 className="text-4xl py-5 px-5 uppercase">
        we are scaling our Agrifint product{" "}
      </h1>
      <div className="img-head11 py-5">
        <FaHandHoldingUsd />
      </div>
      <h1 className="py-3 text-lg">If there is a future, it will be green</h1>
      <h1 className="py-1 text-xl ">+91 9637778041</h1>
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
