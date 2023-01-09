import React from "react";
import Image from "next/image";
import SideBar from "./sidebar/SideBar";
import { FaHandHoldingUsd } from "react-icons/fa";

const Product2 = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Product 2
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">
            Product2
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
            Agrifint Product1
          </h1>
          <p className="text-md leading-8 text-white py-5">
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the ndustry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. When an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="text-md leading-8 text-white py-5">
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet
          </p>
          <Accordion />
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
