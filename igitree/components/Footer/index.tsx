import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white px-2 dark:border-strokedark dark:bg-blacksection lg:px-6">
        <div className="max-w-c-100 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-between py-7 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center"
            >
              <Link href="/">
                <Image
                  width={110}
                  height={80}
                  src="/images/assets/images/Logo4.png"
                  alt="Logo"
                  className="dark:hidden"
                />
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-dark.svg"
                  alt="Logo"
                  className="hidden dark:block"
                />
              </Link>
            </motion.div>

            <div className="flex h-20 flex-col items-center justify-center whitespace-nowrap text-center lg:flex-row">
              <p className="text-sm text-gray-600">
                © 2023 <span className="text-blue-500">iGiTREE</span>. All
                rights reserved.
              </p>
            </div>

            <ul className="flex flex-col items-center gap-8 lg:flex lg:flex-row">
              <li>
                <Link href="/">
                  <span className="hover:text-orange-700">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className="hover:text-orange-700">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <span className="hover:text-orange-700">Features</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="hover:text-orange-700">Pricing</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
