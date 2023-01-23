import React from "react";
// import Contact from '../HomePages/Contact'
import Button from "../../utilities/Button";
import { BsChatText } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsArrowUp, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { AiFillHeart, AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { MdAttachEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import { Router } from "next/router";
import { useRouter } from "next/router";

const ContactUs = () => {
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
  const { values,  error } = state;
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
         }));
    // Router.push("/");
    
    try {
      await sendContactForm(values);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
      router.push("/thankyou");
    }
  };

  return (
    <div>
      <div className=" pt-10 pb-10">
        <div className=" rounded-lg   w-full p-10 lg:w-1/2 form-Contact">
          {error && <h1 className="text-xl text-red">{error}</h1>}
          <form className="form-Contact">
            <div className="flex flex-col  items-center gap-3">
              <div className="flex flex-col lg:flex-row items-center gap-3 w-full ">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                  value={values.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-[#0E2207] text-paraclr px-5 w-full py-5 rounded-lg"
                  value={values.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <textarea
              id=""
              cols="20"
              name="message"
              rows="10"
              placeholder="Write a Message"
              value={values.message}
              onChange={handleChange}
              required
              className="bg-[#0E2207] text-paraclr px-10 w-full py-5 rounded-lg my-4"
            ></textarea>
            <div className="">
              <button
                className="bg-primary text-white rounded-3xl px-3 py-3 disabled:bg-cardBg"
                onClick={onSubmit}
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
  );
};

export default ContactUs;
