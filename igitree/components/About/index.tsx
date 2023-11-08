"use client";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden bg-gray-50 py-[3rem]">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: "Vison and Mission",
                subtitle: "About Us",
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto mt-[3rem] max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse items-center gap-[1rem] md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex hidden h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-1 text-metatitle2 font-bold text-blue-600 dark:text-white">
                    Vision
                  </h3>
                  <p className="lg:text-justify">
                    Our vision is a world where every person, regardless of
                    their background, can effortlessly trace their roots,
                    reconnect with loved ones, and preserve their unique family
                    narratives. Through innovative technology and a commitment
                    to humanitarian causes, we aspire to be the global leader in
                    family unity, DNA discovery, and ancestral heritage
                    celebration.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex hidden h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-1 text-metatitle2 font-bold text-blue-600 dark:text-white">
                    Mission
                  </h3>
                  <p className="lg:text-justify">
                    At iGiTREE, our mission is to bridge the gaps of time and
                    distance, empowering individuals and communities to explore,
                    discover, and celebrate their family heritage. We're
                    dedicated to reuniting families, cultivating a sense of
                    belonging, and nurturing the world's most precious
                    connections.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto block aspect-[588/526.5] w-full md:w-1/2"
            >
              <Image
                src="/images/assets/images/Mask.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/assets/images/Mask.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
