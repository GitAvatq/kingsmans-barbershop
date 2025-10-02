import Image from "next/image";
import { BlogCardProps } from "../../types/blog.interface";

export const BlogCard = ({
  el: { image, title, text, button },
}: BlogCardProps) => (
  <div className="bg-black text-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="relative w-full h-[250px]">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    <div className="p-5 flex flex-col items-start gap-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm font-light">{text}</p>
      <button className="text-[#E9C664] text-sm font-semibold">{button}</button>
    </div>
  </div>
);
