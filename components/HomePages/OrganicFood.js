import React from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import Button from "../../utilities/Button";
import { GiFarmTractor } from "react-icons/gi"
import { TbSeeding, TbPlant2 } from "react-icons/tb";
import {FaHandHoldingUsd} from "react-icons/fa"

const OrganicFood = () => {
  return (
    <div className=" px-6 lg:px-36 bg-dark text-fontclr  py-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
      <div className="w-full lg:w-2/5 relative">
        <div className="relative flex justify-end">
          <div className="bg-primary h-[450px] w-96 rounded-md z-0 mt-5"></div>
          <Image
            src={"/assets/31s.png"}
            alt="features"
            width={438}
            height={580}
            className="rounded-lg image absolute top-0 z-1   right-8"
          />
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-semibold text-primary">
            Get to Know Agrifint
          </p>
          <h2 className="text-3xl lg:text-5xl ">
            HEALTHY FOOD AND HIGH RETURNS AT THE SAME TIME
          </h2>
          <Image
            src={"/assets/section-title-icon-1.png"}
            width={54}
            height={21}
            alt="title icon"
          />
        </div>
        <div className="text-start pt-2">
          <p className="text-paraclr text-xl py-5">
            Our farms are agronomically checked and maintained for fresh
            produce. The live stock is then supplied to entire nation.{" "}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full ">
            <div className="p-8 flex flex-col items-center  rounded-xl border  border-gray-500 hover:border-primary   hover:bg-primary text-primary  hover:text-yellow">
                <GiFarmTractor className="text-7xl " /> 
              <p className="text-white">Fresh Harvest</p>
            </div>
            <div className="p-8 flex flex-col items-center  rounded-xl border  border-gray-500 hover:border-primary   hover:bg-primary text-primary  hover:text-yellow">
              <TbSeeding className="text-7xl " />
              <p className="text-white">Sowing Seeds</p>
            </div>
            <div className="p-8 flex flex-col items-center  rounded-xl border  border-gray-500 hover:border-primary   hover:bg-primary text-primary  hover:text-yellow">
              <TbPlant2 className="text-7xl " />
              <p className="text-white">Agro Gain</p>
            </div>
            <div className="p-8 flex flex-col items-center  rounded-xl border  border-gray-500 hover:border-primary   hover:bg-primary text-primary  hover:text-yellow">
              <FaHandHoldingUsd className="text-7xl " />
              <p className="text-white">AGventure</p>
            </div>
          </div>

          <div className="flex items-center gap-5"></div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFood;
