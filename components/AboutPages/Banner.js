import React from "react";

const Banner = () => {
  return (
    <div className="banner-slide4">
      <div className="absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%] ">
        <div>
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / About
          </a>
        </div>
        <div className="text-5xl font-bold tracking-widest py-3 text-white">
          {" "}
          AboutUs
        </div>
      </div>
    </div>
  );
};

export default Banner;
