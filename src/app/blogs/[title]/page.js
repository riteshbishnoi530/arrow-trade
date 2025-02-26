import DetailsHero from "@/components/blogDetails/DetailsHero";
import MarketInsights from "@/components/blogDetails/MarketInsights";
import Footer from "@/components/common/Footer";
import LatestArticles from "@/components/common/LatestArticels";
import { Suspense } from "react";

export default function Details() {
    return (
        <div className="">
            <Suspense>
            <DetailsHero/>
            <MarketInsights />
            <LatestArticles/>
            <Footer/>
            </Suspense>
        </div>
    );
}