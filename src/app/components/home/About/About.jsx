import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="relative container pt-5 md:pt-8 lg:pt-10 xl:pt-12"
      id="about"
    >
      <h3 className="text-3xl lg:text-4xl font-bold text-black text-center leading-normal ">
        About Me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-8 lg:pt-10">
        <div className="md:col-span-1">
          <Image
            src="/assets/images/Kongkon.jpg"
            alt="my-img"
            width={400}
            height={400}
            className="w-[350px] h-[350px] rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
        <div className="md:col-span-1 p-5 md:p-10 bg-gray-950 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
          <p className="text-base text-white font-normal leading-normal text-justify">
            Hi, This is Kongkon Jowarder. I have 1 year of experience as a Web
            Developer. I have experience in JavaScript, TypeScript, React.Js,
            Next.Js, NextAuth.js, Redux, RTK Query, Node.Js, Express.Js,
            MongoDB, Mongoose, MySQL and other related technologies. I am
            dedicated to problems solving and strive to complete tasks
            efficiently. I am constantly learning new skills to stay updated and
            improve my full-stack development capabilities in my future .
          </p>
          {/* <h4 className="text-2xl lg:text-3xl font-bold text-white text-left leading-normal mt-3 md:mt-4">
            My Journey
          </h4>
          <p className="text-base text-white font-normal leading-normal text-justify">
            My journey in web development began with a strong passion for
            building intuitive, scalable, and impactful applications.
            Specializing in the MERN stack (MongoDB, Express.js, React, and
            Node.js), I have honed my skills in crafting seamless integrations
            between powerful backend architectures and modern, user-friendly
            frontend designs.
          </p> */}
          <div className="flex items-center justify-center mt-4 md:mt-5">
            <Image
              src="/assets/images/mernstack.png"
              alt="mern image"
              width={200}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
