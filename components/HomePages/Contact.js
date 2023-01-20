import Image from "next/image";
import React from "react";
import { BsCheck2, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Button from "../../utilities/Button";

const Contact = () => {
  return (
    <div className="px-6 lg:px-36 bg-dark text-fontclr pt-24 lg:pt-40  py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-2/6">
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-semibold text-primary">Contact Now</p>
          <h2 className="text-3xl lg:text-4xl ">GET IN TOUCH NOW</h2>
          <Image
            src={"/assets/section-title-icon-1.png"}
            width={54}
            height={21}
            alt="title icon"
          />
        </div>
        <div className="mt-10">
          <p className="text-lg text-paraclr">
            There is a long history about generating strong financial results
            through agriculture investments. The low Co relation of farmland
            returns with the returns of other classes means that farmland can
            provide diversification benefits within investor portfolios
          </p>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <div className="text-2xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center">
                <span>
                  <BsEnvelopeFill />
                </span>
              </div>
              <div>
                <p className="text-lg text-paraclr font-semibold">Email Id</p>
                <h3 className="text-2xl text-fontclr font-bold">
                  info@fintlivest.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 my-5">
              <div className="text-2xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center">
                <span>
                  {" "}
                  <BsFillTelephoneFill />
                </span>
              </div>
              <div>
                <p className="text-lg text-paraclr font-semibold">Phone No.</p>
                <h3 className="text-2xl text-fontclr font-bold">9637778041</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center">
                <MdLocationOn />
              </div>
              <div>
                <p className="text-lg text-paraclr font-semibold">Visit Now</p>
                <h3 className="text-ld text-fontclr font-bold">
                  Bengaluru, Karnataka 560102
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/6 ">
        <div className="bg-darkBg rounded-xl  w-full lg:py-10 py-5 px-5">
          <form>
            <div className="flex flex-col  items-center  gap-5">
              <div className="flex flex-col lg:flex-row items-center lg:px-12  pt-12 gap-5 w-full ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-dark text-paraclr px-5 w-full py-5 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-dark text-paraclr px-5 w-full py-5 rounded-lg"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:px-12 gap-5 w-full">
                <input
                  type="number"
                  placeholder="Phone"
                  className="bg-dark text-paraclr px-5 w-full py-5 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-dark text-paraclr px-5 w-full py-5 rounded-lg"
                />
              </div>
            </div>
            <div className="lg:px-12 ">
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Write a Message"
                className="bg-dark text-paraclr px-10 w-full py-5 rounded-lg my-8"
              ></textarea>
            </div>
            <button className="main-btn ml-0 lg:ml-10">Send a Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
