"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { clientTestimonials } from "./testimonialsData";
import TestimonialItem from "./TestimonialItem";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-[4rem]">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "What Clients Say About Us ",
              subtitle: "Testimonials",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-[3rem] md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {clientTestimonials.map((item) => (
              <TestimonialItem key={item.img} item={item} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
