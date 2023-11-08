import Image from "next/image";

interface Props {
  review: {
    name: string;
    designation: string;
    image: string;
    content: string;
  };
}

const SingleTestimonial = ({ review }: Props) => {
  const { name, image, content } = review;

  return (
    <div className="flex flex-col justify-between gap-[2rem] rounded-[28px] bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none md:min-h-[650px]">
      <div className="flex items-center justify-center text-center">
        <Image width={100} height={100} className="" src={image} alt={name} />
      </div>

      <h3 className="text-center text-2xl font-bold text-black dark:text-white">
        {name}
      </h3>

      <p className="font-[400] text-black dark:text-gray-500 lg:text-justify">
        {content}
      </p>

      <div className="flex flex-col items-center justify-center">
        <button
          aria-label="get started button"
          className="rounded-md bg-blue-400 px-8 py-4 text-center text-lg font-medium text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SingleTestimonial;
