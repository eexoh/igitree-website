import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="flex items-center justify-center text-center mt-8 space-x-3">
      <Image width={100} height={100} className="" src={image} alt={name} />
      </div>
          <h3 className="text-2xl text-center font-bold">
            {name}
          </h3>
          <p className="text-2xl leading-normal text-center">{designation}</p>
      <p>{content}</p>
      <button
                      aria-label="get started button"
                      className="px-8 py-4 text-lg font-medium flex items-center justify-center text-center text-white bg-orange-700 rounded-md "
                    >
                      Get Started
                    </button>
    </div>
  );
};



{/* <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">

          <Avatar
              image={userTwoImg}
            />
               <SectionTitle
            pretitle="Gabrielle Winn"
            title="Co-founder of Acme Inc"
            />

            <p className="text-2xl leading-normal ">
              Make sure you only pick the right sentence
              to keep it short and simple.
            </p>
          </div>
        </div> */}


export default SingleTestimonial;
