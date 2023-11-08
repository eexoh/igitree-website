"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import React from "react";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Link from "next/link";
import PhoneIcon from "../Icons/PhoneIcon";
import FaxIcon from "../Icons/FaxIcon";
import EnvelopeIcon from "../Icons/EnvelopeIcon";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section
        id="contact"
        className="bg-gray-50 px-0 py-[4rem] md:px-8 2xl:px-0"
      >
        <div className="relative mx-auto max-w-c-1390 px-7.5 lg:px-15 xl:px-20">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top mx-auto mb-[3rem] text-center">
              <SectionHeader
                headerInfo={{
                  title: (
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                      <span className="dark:text-black">Get in</span>
                      <span className="text-[#26B1FF]">Touch</span>
                    </div>
                  ),
                  subtitle: "Contact Us",
                  darkClass: "dark:text-black",
                }}
              />
            </div>
            {/* <!-- Section Title End --> */}
          </div>
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
          <div className="flex flex-col gap-[2.5rem]">
            <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2">
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
                className="contact-form-container animate_top order-2 flex w-full flex-col gap-[1rem] md:order-1"
              >
                <p className="text-center text-[13px] font-[500] text-black dark:text-gray-500 md:text-start md:text-[15px]">
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </p>

                <form className="flex flex-col gap-[1rem]">
                  <input
                    type="text"
                    className="dark:shadow-sm-light block w-full border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-blacksection dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Name *"
                    required
                  />

                  <input
                    type="email"
                    className="dark:shadow-sm-light block w-full border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-blacksection dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Email address *"
                    required
                  />

                  <input
                    type="tel"
                    className="dark:shadow-sm-light block w-full border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-blacksection dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Phone number *"
                    required
                  />

                  <select
                    className="dark:shadow-sm-light block w-full border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-blacksection dark:text-white dark:placeholder-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Phone number *"
                  >
                    <option value="" selected>
                      How did you find us?
                    </option>
                  </select>

                  <button className="w-full whitespace-nowrap bg-blue-400 px-4 py-2 text-white hover:bg-blue-600">
                    SEND
                  </button>
                </form>
              </motion.div>

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
                transition={{ duration: 2, delay: 0.1 }}
                viewport={{ once: true }}
                className="contact-map-container animate_top order-1 h-[250px] flex-1 overflow-hidden rounded-[30px] md:order-2 md:h-auto"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5050597124928!2d30.057418273351104!3d-1.9511665367108655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e0!3m2!1sen!2srw!4v1698834083249!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            <div className="flex flex-col items-start gap-[1rem] text-[14px] md:flex-row md:items-center">
              <Link href="#" className="flex items-center gap-[3px]">
                <LinkedInIcon />
                <span className="mt-[5px] leading-[0px] text-black dark:text-white">
                  LinkedIn
                </span>
              </Link>

              <Link href="#" className="flex items-center gap-[3px]">
                <InstagramIcon />
                <span className="mt-[5px] leading-[0px] text-black dark:text-white">
                  Instagram
                </span>
              </Link>
            </div>

            <div className="flex flex-col items-start gap-[2rem] md:flex-row md:items-center ">
              <div className="flex items-center gap-[.75rem]">
                <PhoneIcon />

                <div className="flex flex-col gap-[1.25rem] text-[12px]">
                  <span className="font-bold uppercase leading-[0px] text-black dark:text-white">
                    Phone
                  </span>
                  <span className="whitespace-nowrap leading-[0px] text-blue-500">
                    (+250) 7879 619 83
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[.75rem]">
                <FaxIcon />

                <div className="flex flex-col gap-[1.25rem] text-[12px]">
                  <span className="font-bold uppercase leading-[0px] text-black dark:text-white">
                    Fax
                  </span>
                  <span className="whitespace-nowrap leading-[0px] text-blue-500">
                    03 5432 1234
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[.75rem]">
                <EnvelopeIcon />

                <div className="flex flex-col gap-[1.25rem] text-[12px]">
                  <span className="font-bold uppercase leading-[0px] text-black dark:text-white">
                    Email
                  </span>
                  <span className="whitespace-nowrap leading-[0px] text-blue-500">
                    info@igitree.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
