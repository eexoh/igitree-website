import Image from "next/image";
import { TestimonialItem } from "./testimonialsData";

interface Props {
  item: TestimonialItem;
}

const TestimonialItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center gap-[1rem] md:flex-row md:items-start">
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[10px] sm:h-[150px] sm:w-[150px] md:h-[70px] md:w-[70px]">
        <Image src={item.img} fill alt="Testimonial" />
      </div>

      <div className="w-full text-center text-[15px] font-[400] text-black dark:text-gray-500 md:w-[90%] md:text-justify md:text-[18px]">
        {item.content}
      </div>
    </div>
  );
};

export default TestimonialItem;
