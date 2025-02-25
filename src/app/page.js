import Blogs from "@/components/blogs/Blogs";
import Hero from "@/components/blogs/Hero";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Hero />
        <Blogs />
        <Footer />
      </Suspense>
    </>
  );
}
