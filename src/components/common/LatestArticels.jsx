"use client";
import { ARTICLES_CARD_LIST, BLOG_CARD_LIST } from "@/utils/helper";
import React from "react";
import Image from "next/image";
import CustomBtn from "../common/CustomBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, } from "swiper/modules";
import Heading from "./Heading";
import { Arrow, NextArrow, PrevArrow } from "@/utils/icons";

const LatestArticles = () => {
    return (
      <div className="relative pb-10">
        <div className="container">
         <Heading myClass="!text-center !mb-[70px]" title="Latest" spanTitle="Articles"/>

          {/* Swiper Container */}
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".right-btn",
              prevEl: ".left-btn",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Navigation, Pagination,]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            className="flex items-center"
          >
            {BLOG_CARD_LIST.map((obj, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full max-w-[364px] mx-auto border h-[498px] max-xl:h-full border-lightGreen rounded-[10px] bg-white bg-opacity-[0.03] pb-10 overflow-hidden">
                  <div className="max-w-[364px] overflow-hidden h-[237px]">
                    <Image
                      width={364}
                      height={237}
                      className="max-w-[364px] pointer-events-none object-cover hover:scale-110 duration-300 ease-linear"
                      src={obj.image}
                      alt="article images"
                    />
                  </div>
                  <p className="absolute top-5 right-8 text-white text-base font-semibold leading-6">
                    {obj.date}
                  </p>
                  <div className="px-5">
                    <div className="w-full max-xl:flex-wrap gap-6 flex items-center justify-center -mt-6 relative z-30">
                      <CustomBtn
                        Text="Productivity"
                        myClass="py-[7px] px-[34.875px] bg-[#0F0D10] text-white shadow-none hover:text-custom-black hover:bg-white rounded-full text-sm leading-[21px] min-w-[154px]"
                      />
                      <CustomBtn
                        Text={obj.timeReamining}
                        myClass="py-[7px] px-[34.875px] bg-[#232224] text-white shadow-none rounded-full text-sm leading-[21px] border-white min-w-[154px] hover:bg-white hover:text-custom-light-gray"
                      />
                    </div>
                    <h2 className="text-white pt-6 pb-2.5 text-xl font-semibold leading-[24.4px]">
                      {obj.title}
                    </h2>
                    <p className="text-white opacity-70 max-w-[323px] pb-6 text-base leading-6">
                      {obj.description}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <Image
                          width={50}
                          height={50}
                          className="max-w-[50px] object-cover pointer-events-none"
                          src={obj.profileImage}
                          alt="author image"
                        />
                        <p className="text-white text-base font-semibold">
                          {obj.author}
                        </p>
                      </div>
                      <Arrow/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination block xl:hidden"></div>

          <div className="right-btn  absolute top-1/2 max-xl:hidden left-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-lightGreen">
          <PrevArrow/>
          </div>
          <div className="left-btn absolute top-1/2 max-xl:hidden right-[45px] flex items-center justify-center size-[60px] min-w-[60px] rounded-full bg-lightGreen">
         <NextArrow/>
          </div>
        </div>
      </div>
    );
};

export default LatestArticles;
