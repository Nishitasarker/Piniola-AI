import Image from "next/image";
import Hero from "@/Components/Hero";
import FeaturesPage from "@/Components/Features";
import PricingPackagesPage from "@/Components/Packages";
import WhyChooseUs from "@/Components/WhyChooseUs";
import FAQ from "@/Components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero></Hero>
     <FeaturesPage></FeaturesPage>
     <PricingPackagesPage></PricingPackagesPage>
     <WhyChooseUs></WhyChooseUs>
     <FAQ></FAQ>
    </div>
  );
}
