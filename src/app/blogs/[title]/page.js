import DetailsHero from "@/components/blogDetails/DetailsHero";
import MarketInsights from "@/components/blogDetails/MarketInsights";
import Footer from "@/components/common/Footer";

export default function Details() {
    return (
        <div className="">
            <DetailsHero/>
            <MarketInsights />
            <Footer/>
        </div>
    );
}