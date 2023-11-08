import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import GoogleIcon from "../Icons/GoogleIcon";

const HeroSection = () => {
  return (
    <div className="hero-bg min-h-[50vh] pb-[2rem] pt-[12rem] md:min-h-[80vh]">
      <div className="mx-auto flex max-w-c-1390 justify-between gap-[2rem] px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-2/5 flex-col gap-4">
          <div className="flex flex-col gap-[1.5rem] rounded-[24px] border-[1px] border-solid border-[#D9D9D9] bg-[#ffffffb3] p-[1.5rem]">
            <h2 className="text-[64px] font-[600] leading-[72px] text-[#373737]">
              Uncover Your Ancestry with iGiTREE
            </h2>

            <div className="flex flex-col gap-[1.25rem] text-justify text-[1rem] font-[300] text-[#414141]">
              <p>
                We want to make DNA testing and matching as simple and
                user-friendly as attainable, while also offering a robust set of
                features that will allow users to connect and disseminate with
                potential relatives.
              </p>

              <ol>
                <li>1. Uncover your ancestry</li>
                <li>2. Reconnect with your lost ones</li>
                <li>3. Trace and link with family members</li>
              </ol>
            </div>
          </div>

          <button className="w-max whitespace-nowrap rounded-md bg-blue-400 px-6 py-3 text-white hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-6">
          <h2 className="text-[24px] font-[600] leading-[44px] text-black">
            Get Started With iGiTREE
          </h2>

          <div className="mb-6 flex items-center justify-center gap-3">
            <Link
              href="#"
              className="flex items-center gap-[.35rem] rounded-md bg-white px-[1.25rem] py-[.65rem] text-[.85rem] font-[600] text-black hover:opacity-[.95]"
            >
              <GoogleIcon />
              Google
            </Link>

            <Link
              href="#"
              className="flex items-center gap-[.35rem] rounded-md bg-white px-[1.25rem] py-[.65rem] text-[.85rem] font-[600] text-black hover:opacity-[.95]"
            >
              <FacebookIcon />
              Facebook
            </Link>
          </div>

          <div className="flex w-full flex-col gap-6">
            <input
              type="text"
              className="block w-full rounded-md border border-[#D9D9D9] bg-white px-4 py-[1.15rem] text-sm text-gray-900 placeholder-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              className="block w-full rounded-md border border-[#D9D9D9] bg-white px-4 py-[1.15rem] text-sm text-gray-900 placeholder-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              className="block w-full rounded-md border border-[#D9D9D9] bg-white px-4 py-[1.15rem] text-sm text-gray-900 placeholder-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Password"
              required
            />

            <button className="whitespace-nowrap rounded-md bg-blue-400 px-4 py-3 text-white hover:bg-blue-600">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
