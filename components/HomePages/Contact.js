import Image from "next/image";
import React from "react";
import { BsCheck2, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Button from "../../utilities/Button";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import { Router } from "next/router";
import { useRouter } from "next/router";

const Contact = () => {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const initState = { values: initValues };
  const router = useRouter();

  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;
  // console.log(state);

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: false,
    }));
    // Router.push("/");

    try {
      await sendContactForm(values);
      router.push("/thankyou");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

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
                <h3
                  className="text-2xl text-fontclr font-bold cursor-pointer"
                  onClick={() => router.push("mailto:digitechladder@gmail.com")}
                >
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
                <h3
                  className="text-2xl text-fontclr font-bold cursor-pointer"
                  href="tel:+91 9637778041"
                >
                  9637778041
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xl text-fontclr bg-primary  about-icon w-14 h-14 rounded-full flex items-center justify-center">
                <MdLocationOn />
              </div>
              <div>
                <p className="text-lg text-paraclr font-semibold">Visit Now</p>
                <h3 className="text-ld text-fontclr font-bold ">
                  Bengaluru, Karnataka 560102
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/6 ">
        <div className="bg-darkBg rounded-xl  w-full lg:py-10 py-5 px-5">
          <div className=" rounded-lg   w-full p-5  form-Contact">
            {error && <h1 className="text-xl text-red">{error}</h1>}
            <form className="form-Contact">
              <div className="flex flex-col  items-center gap-3">
                <div className="flex flex-col lg:flex-row items-center gap-3 w-full ">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    name="name"
                    className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                id=""
                cols="20"
                name="message"
                rows="10"
                placeholder="Write a Message"
                required
                value={values.message}
                onChange={handleChange}
                className="bg-[#0E2207] text-paraclr px-10 w-full py-5 rounded-lg my-4"
              ></textarea>
              <div className="">
                <button
                  className="bg-primary text-white rounded-3xl px-3 py-3 disabled:bg-cardBg"
                  onClick={onSubmit}
                  isLoading={isLoading}
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.phone ||
                    !values.subject ||
                    !values.message
                  }
                >
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
