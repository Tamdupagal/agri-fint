import Image from 'next/image';
import React from 'react';
import { achivementData } from '../../public/homeData';
import Button from '../../utilities/Button';
import CountUp from 'react-countup';

const Success = () => {

    return (
      <div className=" bg-dark text-white  px-8 lg:px-36 flex flex-col items-center justify-center   py-10">
        <div className="flex flex-col items-center gap-3 py-10 mb-10">
          <p className="text-lg font-semibold text-primary uppercase">
            We are proud of our partner in association
          </p>
          <h2 className="text-3xl lg:text-5xl text-center">
            Agriculture Sector is growing rapidly.
          </h2>
          <Image
            src={"/assets/section-title-icon-1.png"}
            width={54}
            height={21}
            alt="title icon"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full mb-10 ml-0 lg:ml-20">
          <div className="flex items-center  gap-5 w-full">
            <Image
              src={"/assets/investment.svg"}
              alt={"success"}
              width={100}
              height={50}
            />
            <div>
              <h3 className="text-2xl font-bold text-primary">
                TOTAL INVESTMENTS
              </h3>
              <h2 className="text-5xl font-bold text-fontclr ">
                ₹
                <CountUp enableScrollSpy={true} end={15} duration={2} />+
              </h2>
              <p className="text-paraclr text-sm">CRORES</p>
            </div>
          </div>

          <div className="flex items-center  gap-5 w-full">
            <Image
              src={"/assets/return.svg"}
              alt={"success"}
              width={100}
              height={50}
            />
            <div>
              <h3 className="text-2xl font-bold text-primary">RETURNS</h3>
              <h2 className="text-5xl font-bold text-fontclr ">
                <CountUp enableScrollSpy={true} end={18} duration={2} />%
              </h2>
              <p className="text-paraclr text-sm">PER ANNUM</p>
            </div>
          </div>

          <div className="flex items-center  gap-5 w-full">
            <Image
              src={"/assets/TotalInvestments.svg"}
              alt={"success"}
              width={100}
              height={50}
            />
            <div>
              <h3 className="text-2xl font-bold text-primary">MANAGED AREA</h3>
              <h2 className="text-5xl font-bold text-fontclr ">
                <CountUp enableScrollSpy={true} end={2100} duration={2} />+
              </h2>
              <p className="text-paraclr text-sm">ACRES</p>
            </div>
          </div>
        </div>

        <Button>Invest Now</Button>
        {/*  <p className='text-xl lg:text-2xl mt-7 font-semibold text-center text-paraclr'>Subscribed 100% in 6 hours on Tyke Invest</p>
            <p className='text-xl lg:text-2xl font-semibold text-center text-paraclr'>Trusted by investor community spread across 10+ countries and 150+ cities</p>
 */}
      </div>
    );
};

export default Success;