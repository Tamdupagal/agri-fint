import React from "react";
import Envato from "./envato";
import Testimonial from "../HomePages/Testimonial";
import Image from "next/image";
import Team_members from "./Team_members";
import Product from "./Product";
import Banner from "./Banner";

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
                Get to Know Agrion
              </p>
              <h1 className="text-3xl py-3 lg:text-6xl ">
                WE’RE AGRION EXPERT QUALITY FARMING LEADERS
              </h1>
              <Image
                className="mt-2"
                src={"/assets/section-title-icon-1.png"}
                width={54}
                height={21}
                alt="title icon"
              />
              <p className="text-paraclr text-xl py-10">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or words even slightly believable.
              </p>
            </div>
            <div className="flex justify-between lg:px-4 py-3">
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 md:inline-block text-yellow "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <h3 className="md:inline-block ml-2">Magnis Dis Nascet</h3>
                <p className="text-paraclr ml-2 py-5">
                  Lorem ipsum is free do sited
                </p>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 md:inline-block text-yellow"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <h3 className="md:inline-block ml-2">Libro id Edge</h3>
                <p className="text-paraclr ml-2 py-5">
                  Lorem ipsum is free do sited
                </p>
              </div>
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
