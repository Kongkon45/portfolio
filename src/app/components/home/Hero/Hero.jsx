import Image from 'next/image';
import React from 'react';
import { IoIosSend } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
    return (
        <div className='container relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='md:col-span-1 flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-normal text-black'>Hello, My Name is <br/> <strong className='text-blue-500'>Kongkon Jowarder</strong></h1>
                    <p className='text-base xl:text-lg font-normal leading-normal text-black mt-[10px]'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
                    <div className="flex items-center gap-10 mt-[20px] lg:mt-[30px]">
                        <button className='flex items-center gap-1 bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300'>Contact Me <IoIosSend className="w-[26px] h-[26px]"/> </button>
                        <button className='flex items-center gap-1 bg-blue-500 hover:bg-gray-950 border-2 hover:border-blue-500 text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg transition ease-in-out dealy-150 duration-300'>Download CV <LuDownload className="w-[26px] h-[26px]"/> </button>
                    </div>
                </div>
                <div className='md:col-span-1 flex justify-center items-center'>
                    <Image src="/assets/images/hero.png" alt='hero image' width={400} height={200}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;