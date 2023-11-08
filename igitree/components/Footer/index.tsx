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
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-100 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-row items-center justify-between py-7">
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

            <div className="flex justify-center items-center text-center h-20">
  <p className="text-sm text-gray-600">
    © 2023 <span className="text-blue-500">iGiTREE</span>. All rights reserved.
  </p>
</div>


            <ul className="flex items-center gap-8">
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
