"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Uncover Your Ancestry with iGitree
              </h1>
              <p>
              We want to make DNA testing and matching as simple and user-friendly as attainable, 
              while also offering a robust set of features that will allowusers to connect and disseminate with potential relatives.
              Uncover your ancestry Reconnect with your lost ones Trace and link with family members
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-700 rounded-md "
                    >
                      Get Started
                    </button>

                    <a
                href="/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <Image
                src="/images/assets/images/LearnMoreicon.png"
                        alt="N"
                        width="34"
                        height="34"
                        className=""
                />
                <span className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white"> Learn More </span>
              </a>

                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
              <div className="flex items-start justify-start w-full pl-0">
          <div className="ml-0">
                <Image
                  src="/images/assets/images/Vector1.png"
                  width={500}
                  height={617}
                  className="object-cover"
                  alt="Hero Illustration"
                  loading="eager"
                />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
