import { Metadata } from "next";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HeroSection from "@/components/Hero/HeroSection";

export const metadata: Metadata = {
  title: "iGitree",
  // description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Testimonial />
      {/* <Brands /> */}
      <About />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
      <Feature />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
