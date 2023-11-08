"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        {subtitle && (
          <div className="mb-2 px-4.5 py-1.5 font-bold">
            <span className="text-sectiontitle font-medium uppercase text-gray-600 dark:text-white">
              {subtitle}
            </span>
          </div>
        )}
        <h2 className="mx-auto mb-4 px-4.5 text-3xl font-bold capitalize text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {title}
        </h2>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
