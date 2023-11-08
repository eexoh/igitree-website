import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathUrl = usePathname();

  // Check if the current path is '/auth/signin'
  if (pathUrl === "/auth/signin") {
    return null;
  }

  // Check if the current path is '/auth/signup'
  if (pathUrl === "/auth/signup") {
    return null;
  }

  return (
    <>
      <footer className="mx-auto max-w-c-1390 items-center justify-between border-t border-stroke bg-white px-4 dark:bg-transparent">
        <div className="max-w-c-100 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-between gap-[1.5rem] py-7 text-[14px] md:text-[1rem] lg:flex-row">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-col items-center gap-[1rem] md:flex-row md:gap-[3rem]"
            >
              <Link href="/">
                <div className="relative h-[90px] w-[90px]">
                  <Image
                    src="/images/Logo4.ico"
                    alt="logo"
                    fill
                    className="w-full"
                  />
                </div>
              </Link>

              <div className="whitespace-nowrap">
                © 2023 <span className="font-bold text-blue-400">iGiTREE</span>
                . All rights reserved.
              </div>
            </motion.div>

            <ul className="hidden flex-col items-center gap-[.75rem] md:flex lg:flex lg:flex-row">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <span className="hover:text-blue-400">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="hover:text-blue-400">Features</span>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="hover:text-blue-400">Pricing</span>
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
