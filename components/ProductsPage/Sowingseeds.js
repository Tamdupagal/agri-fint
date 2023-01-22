import React from "react";
import Image from "next/image";
import SideBar from "./sidebar/SideBar";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Product2 = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page2"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Sowing seeds
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">
            Sowing seeds
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
                src={"/assets/33.png"}
                alt="features"
                layout="fill"
                className="rounded-lg image"
              />
            </div>
          </div>

          <h1 className="py-2 text-4xl font-bold text-white ">
            Sowing Seeds
          </h1>
          <p className="text-md leading-8 text-white py-5">
            Among the major field crops, oats, wheat, and rye are sown, grasses
            and legumes are seeded and maize and soybeans are planted. In
            planting, wider rows generally 75 cm (30 in) or more) are used, and
            the intent is to have precise; even spacing between individual seeds
            in the row, various mechanisms have been devised to count out
            individual seeds at exact intervals.
          </p>
          <p className="text-md leading-8 text-white py-5">
            Whereas Advance sowing is a process that allows the production of
            annual crops from perennial grassland. It involves dry sowing crops
            directly into existing pastures without using tillage, fertilisers
            or chemicals.
          </p>
          <h1 className="py-2 text-3xl font-bold text-white capitalize ">
            Project Challenges:
          </h1>
          <p className="text-md leading-8 text-white py-5">
            At sowing, management and environment are the key issues. Factors
            affecting the establishment percentage include management factors
            such as depth of sowing, row spacing, seed size and herbicide
            application as well as environmental factors such as soil moisture
            and temperature. But with an excellent Agronomic team, we are able
            to identify and conclude the problems.
          </p>
          <div className="flex flex-row items-center">
            <TiTick className="text-yellow text-3xl" />
            <p className="text-md leading-8 text-white">
              Initiate annual investment plan
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

export default Product2;

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
