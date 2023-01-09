import React from "react";
import Image from "next/image";

function Product() {
  return (
    <div className="bg-darkBg text-fontclr flex flex-col xl:flex-row lg:flex justify-between">
      <div className="w-full xl:w-1/2 relative ">
        <div className="lg:w-80 flex justify-around items-center px-5 absolute top-100 bottom-0 right-0 xl:translate-y-[0%] lg:translate-y-[-42%] rounded-tl-xl bg-yellow h-32">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-20 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </span>
          <p className="px-3 text-lg text-black font-bold ">
            We’re here to support you every step of the way.
          </p>
        </div>
        <div className="banner-slide5"></div>
        {/* <img
          className="h-full lg:pb-10"
          src="https://layerdrops.com/agrionhtml/main-html/assets/images/backgrounds/provide-one-bg.jpg"
        /> */}
      </div>
      <div className="w-full xl:w-1/2 pt-20 px-10">
        <p className="text-lg font-semibold text-primary py-1 md:px-10">
          Our Benefits
        </p>
        <h1 className="text-3xl py-1 lg:text-6xl md:py-5 md:px-10">
          PROVIDING HIGH QUALITY PRODUCTS
        </h1>
        <Image
          className="md:mt-5 py-1 md:ml-10"
          src={"/assets/section-title-icon-1.png"}
          width={54}
          height={21}
          alt="title icon"
        />
        <p className="text-paraclr text-xl pb-10 py-5 md:px-10">
          There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs
          condmentum leo massa mollis estiegittis miristum nulla sed medy
          fringilla vitae.
        </p>
      </div>
    </div>
  );
}

export default Product;
