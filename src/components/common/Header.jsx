"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LIST } from "@/utils/helper";
import CustomBtn from "./CustomBtn";

const Header = () => {
  const [showSlide, setShowSlide] = useState(false);
  const [active, setActive] = useState(0);

  const activeHandle = (index) => {
    setActive(active === index ? null : index);
  }
  useEffect(() => {
    const body = document.body;
    if (showSlide) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [showSlide]);
  return (
    <div
      className="max-w-[1220px] backdrop-blur-[24] bg-[#FFFFFF1A] rounded-[60px] w-full mx-auto px-10 max-md:px-4 py-[18.5px] max-md:py-[5px]">
      <div className="flex justify-between items-center">
        <Link className="lg:ml-11" href="/">
          <Image className="pointer-events-none max-lg:w-[130px]" src="/assets/images/logo.webp" alt="logo" width={150} height={44} />
        </Link>
        <div
          className={`flex gap-5 max-lg:gap-3 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-black duration-300 ease-linear z-20 ${showSlide ? "max-lg:left-0" : "max-lg:left-full"}`} >
          {HEADER_LIST.map((obj, i) => (
            <ul key={i}>
              <li onClick={() => activeHandle(i)} className={`flex gap-1 flex-row justify-center text-white items-center ${active === i ? "text-custom-sky" : ""}`}>
                <Link href={obj.link} onClick={() => setShowSlide(false)} className={`text-base font-bold max-lg:text-xl hover:text-custom-yellow transition-all duration-300 ease-linear`} >
                  {obj.title}
                </Link>
              </li>
            </ul>
          ))}
         <div className="lg:hidden gap-6 flex">
          <CustomBtn myClass="!bg-transparent !text-custom-sky hover:!bg-custom-sky hover:!text-black" text="Sign Up"/>
          <CustomBtn text="Login"/>
        </div>
        </div>
        <div onClick={() => setShowSlide(!showSlide)} className="z-[21] flex-col gap-1 lg:hidden flex cursor-pointer" >
          <span
            className={`${showSlide
              ? "w-6 max-sm:w-4 max-sm:h-[3px] h-1 bg-white rotate-45 translate-y-5 max-sm:translate-y-2 duration-300 ease-linear rounded"
              : "w-6 max-sm:w-4 max-sm:h-[3px] h-1 bg-white duration-300 ease-linear rounded"
              }`}
          ></span>
          <span
            className={`${showSlide
              ? "w-6 max-sm:w-4 h-1 max-sm:h-[3px] bg-white opacity-0 duration-300 ease-linear"
              : "w-6 max-sm:w-4 h-1 max-sm:h-[3px] bg-white rounded duration-300 ease-linear"
              }`}
          ></span>
          <span
            className={`${showSlide
              ? "w-6 max-sm:w-4 h-1 max-sm:h-[3px] bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
              : "w-6 max-sm:w-4 h-1 max-sm:h-[3px] bg-white duration-300 ease-linear rounded"
              }`}
          ></span>
        </div>
        <div className="max-lg:hidden gap-6 flex">
          <CustomBtn myClass="!bg-transparent !text-custom-sky hover:!bg-custom-sky hover:!text-black" text="Sign Up"/>
          <CustomBtn text="Login"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
