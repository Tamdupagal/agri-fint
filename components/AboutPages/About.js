import React from "react";
// import Envato from "./envato";
import Testimonial from "../HomePages/Testimonial";
import Image from "next/image";
import Team_members from "./Team_members";
import Product from "./Product";
import Banner from "./Banner";
import { TiTick } from "react-icons/ti";

function About() {
  return (
    <>
      <Banner />
      <div className="w-full px-6 lg:px-20 bg-dark text-fontclr lg:py-32 py-5 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        <div className="mt-5 lg:px-10 bg-dark text-fontclr  flex flex-col xl:flex-row justify-around gap-10 relative">
          <div className="md:grid md:grid-rows-2 md:grid-flow-col gap-10 justify-center flex flex-col xl:w-1/2">
            <img
              className="row-span-1 rounded w-full h-full"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/resources/about-three-img-1.jpg"
            />
            <img
              className="col-span-1 rounded w-full h-full"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/resources/about-three-img-2.jpg"
            />
            <img
              className="row-span-2 rounded w-full h-full"
              src="https://layerdrops.com/agrionhtml/main-html/assets/images/resources/about-three-img-3.jpg"
            />
          </div>
          <div className="xl:w-1/2 relative ">
            <div className="lg:px-4">
              <p className="text-lg font-semibold text-primary">
                Get to know about AgriFint:
              </p>
              <h1 className="text-3xl py-3 lg:text-5xl ">
                WE SPECIALIZE IN AGRICULTURAL INVESTMENTS
              </h1>
              <Image
                className="mt-2"
                src={"/assets/section-title-icon-1.png"}
                width={54}
                height={21}
                alt="title icon"
              />
              <p className="text-paraclr text-xl py-10">
                There is a long history about generating strong financial
                results through agriculture investments. The low Co relation of
                farmland returns with the returns of other classes means that
                farmland can provide diversification benefits within investor
                portfolios.
              </p>
            </div>

            <div className="flex justify-between lg:px-4 py-3">
              <div>
                <div className="flex flex-row items-center">
                  {/* <TiTick className="text-yellow text-3xl" /> */}
                  <p className="text-paraclr text-xl  ">
                    A vision to help and educate people about agricultural
                    investments so that you know ‘how green the the future can
                    be’
                  </p>
                </div>{" "}
                <p className="text-primary text-xl">
                  If there is a future, it will be green
                </p>
              </div>
              {/* <div>
                <div className="flex flex-row items-center">
                  <TiTick className="text-yellow text-3xl" />
                  <p className="text-md leading-8 text-white ">Fixed return</p>
                </div>
                <p className="text-paraclr ml-2 py-5">
                  Lorem ipsum is free do sited
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Product />
      <Team_members />
      <Testimonial />
    </>
  );
}

export default About;
