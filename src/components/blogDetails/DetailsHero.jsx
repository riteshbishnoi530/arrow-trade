"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { BLOG_CARD_LIST } from "@/utils/helper"; // Your blog data
import Header from "../common/Header";
import Image from "next/image";
import CustomBtn from "../common/CustomBtn";

const BlogDetails = () => {
  const router = useRouter(); // Get the router
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Wait for the router to be ready
    if (router.isReady) {
      const { title } = router.query; // Capture the dynamic title from the URL
      if (title) {
        const selectedBlog = BLOG_CARD_LIST.find(
          (blog) => blog.title.toLowerCase().replace(" ", "-") === title
        );
        setBlog(selectedBlog);
      }
    }
  }, [router.isReady, router.query]); // Trigger when the router is ready or the query changes

  // If the blog is not found yet, or is loading
  if (!blog) {
    return (
      <div className="text-center text-white">
        <h2>Blog Not Found</h2>
        <p>We couldn't find the blog you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="pb-[271px] max-xl:pb-36 max-lg:pb-20 max-md:pb-16 max-sm:pb-10">
      <div className="max-w-[1440px] mx-auto relative">
        <Header />
        <div className="container mt-[91px] max-xl:pt-14 max-lg:pt-10 max-w-[1140px] mx-auto">
          <div className="max-w-[481px]">
            <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
              {blog.title}
            </h2>
            <p className="text-base leading-6 pt-4 pb-[30px] text-white opacity-80 font-normal max-xl:max-w-none">
              {blog.description}
            </p>
            <div className="gap-4 items-center flex">
              <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-lightGreen bg-[#0F0D10] rounded-[50px] text-sm leading-[150%]">
                Productivity
              </button>
              <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-[#232224] border-white rounded-[50px] text-sm leading-[150%]">
                {blog.readButton}
              </button>
              <p className="leading-[150%] font-semibold max-md:text-sm text-white">
                {blog.date}
              </p>
            </div>
          </div>
          {blog.image && (
            <Image
              width={720}
              height={570}
              alt="blog image"
              src={blog.image}
              className="absolute h-[570px] object-cover top-0 right-0 max-xl:hidden"
            />
          )}
          {blog.image && (
            <Image
              width={720}
              height={570}
              alt="blog image"
              src={blog.image}
              className="object-cover xl:hidden mx-auto mt-[50px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
