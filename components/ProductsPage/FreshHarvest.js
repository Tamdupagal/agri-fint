import React from "react";
import Image from "next/image";
import SideBar from "./sidebar/SideBar";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


const Product1 = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Fresh Harvest
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">
            Fresh Harvest
          </h2>
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
                src={"/assets/25.png"}
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
            Harvest Innovation TO Fresh Harvest
          </h1>
          <p className="text-md leading-8 text-white py-5">
            Harvesting is an art of gathering a ripe crop from the fields.
            Reaping is the cutting of grain or pulse for harvest, typically
            using a scythe, sickle, or reaper. On smaller farms with minimal
            mechanization, harvesting is the most labor-intensive activity of
            the growing season. On large mechanized farms, harvesting uses the
            most expensive and sophisticated farm machinery, such as the combine
            harvester.
          </p>
          <p className="text-md leading-8 text-white py-5">
            Process automation has increased the efficiency of both the seeding
            and harvesting processes. Specialized harvesting equipment utilizing
            conveyor belts to mimic gentle gripping and masstransport replaces
            the manual task of removing each seedling by hand. The term
            &quots;harvesting&quots; in general usage may include immediate
            postharvest handling, including cleaning, sorting, packing, and
            cooling.
          </p>
          <h1 className="py-2 text-3xl font-bold text-white capitalize ">
            Project Challenges:
          </h1>
          <p className="text-md leading-8 text-white py-5">
            In many ways, maintaining the quality of the crop where nowadays
            insecticides and pesticides are used. We here have proved that new
            age farming with traditional techniques can reap you a quality crop.
            Our 8000+ acre land are such examples of quality farming. Feels free
            to visit.
          </p>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white">
              Monthly investment Plan
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
            <p className="text-md leading-8 text-white ">
              Easy short lockin
            </p>
          </div>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white ">Tax benefited</p>
          </div>
          {/*  <Accordion /> */}
        </div>
      </div>
    </div>
  );
};

export default Product1;

const SideBarCard2 = () => {
    return (
      <div className="bg-cardBg text-white text-xl text-center rounded-xl  py-10  px-5 font-semibold  w-93">
        <h1 className="text-4xl py-5 px-5 uppercase">we are scaling our Agrifint product </h1>
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
