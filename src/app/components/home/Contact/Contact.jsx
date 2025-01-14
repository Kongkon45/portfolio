"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useForm } from "react-hook-form";
import contactData from "../../../../../public/assets/images/contact.json";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Lottie = dynamic(()=>  import ("lottie-react"), {ssr: false})

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div
      id="contact"
      className="relative container py-5 md:py-8 lg:py-10 xl:py-12"
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-black text-center leading-normal ">
        Contact Me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-8 lg:pt-10">
        <div className="md:col-span-1">
          
        

          <h4 className="text-3xl lg:text-4xl font-bold text-black leading-normal">
            Let's Talk
          </h4>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 gap-5 py-1">
            <div className="w-full md:w-1/2">
              <h5 className="text-[20px] lg:text-xl font-bold text-black leading-normal">
                Email
              </h5>
              <p className="text-base font-normal text-black leading-normal">
                kongkon4545@gmail.com
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h5 className="text-[20px] lg:text-xl font-bold text-black leading-normal">
                Phone
              </h5>
              <p className="text-base font-normal text-black leading-normal">
                01778934545
              </p>
            </div>
          </div>
          <div className="">
            <h5 className="text-[20px] lg:text-xl font-bold text-black leading-normal">
              Follow Me
            </h5>
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              {/* Facebook Link */}
              <Link
                href="https://www.facebook.com/kongkon.jowarder/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit my Facebook profile"
              >
                <FaFacebookSquare className="w-[28px] h-[28px] text-blue-500 hover:text-blue-600 transition-colors cursor-pointer" />
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="tel:01778934545"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Call me on WhatsApp"
              >
                <FaSquareWhatsapp className="w-[28px] h-[28px] text-green-500 hover:text-green-600 transition-colors cursor-pointer" />
              </Link>

              {/* LinkedIn Link */}
              <Link
                href="https://www.linkedin.com/in/kongkon-jowarder-50a12725b/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="w-[28px] h-[28px] text-blue-500 hover:text-blue-600 transition-colors cursor-pointer" />
              </Link>
            </div>
          </div>
          <Lottie
            loop
            autoplay
            animationData={contactData}
            className="w-[430px] h-[430px]"
          />

        </div>
        <div className="md:col-span-1 bg-gray-900 p-8 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
          <h4 className="text-3xl lg:text-4xl font-bold text-white leading-normal pb-5">
            Get in Touch
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name  */}
            <div>
              <label
                className="text-base xl:text-lg text-white font-bold text-white leading-normal"
                htmlFor="name"
              >
                Name <sup className="text-base xl:text-lg text-red-500">*</sup>
              </label>
              <input
                className="w-full py-2 px-3 border rounded-lg bg-white text-gray-950 border-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                {...register("name", { required: true })}
                placeholder="Enter Your Name ... "
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This Field is Required
                </span>
              )}
            </div>
            {/* email  */}
            <div className="my-4 lg:my-5">
              <label
                className="text-base xl:text-lg text-white font-bold text-white leading-normal"
                htmlFor="email"
              >
                Email <sup className="text-base xl:text-lg text-red-500">*</sup>
              </label>
              <input
                className="w-full py-2 px-3 border rounded-lg bg-white text-gray-950 border-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                {...register("email", { required: true })}
                placeholder="Enter Your Email ... "
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This Field is Required
                </span>
              )}
            </div>
            {/* phone number  */}
            <div className="my-4 lg:my-5">
              <label
                className="text-base xl:text-lg text-white font-bold text-white leading-normal"
                htmlFor="phone"
              >
                Phone Number{" "}
                <sup className="text-base xl:text-lg text-red-500">*</sup>
              </label>
              <input
                className="w-full py-2 px-3 border rounded-lg bg-white text-gray-950 border-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                {...register("phone", { required: true })}
                placeholder="Enter Your Phone Number ... "
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  This Field is Required
                </span>
              )}
            </div>
            {/* message  */}
            <div className="mb-4 lg:mb-5">
              <label
                className="text-base xl:text-lg text-white font-bold text-white leading-normal"
                htmlFor="message"
              >
                Message{" "}
                <sup className="text-base xl:text-lg text-red-500">*</sup>
              </label>
              <textarea
                className="w-full py-2 px-3 border rounded-lg bg-white text-gray-950 border-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                {...register("message", { required: true })}
                rows={3}
                placeholder="Enter Your Message ... "
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This Field is Required
                </span>
              )}
            </div>
            {/* button  */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-base lg:text-lg font-bold leading-normal py-2 px-8 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
