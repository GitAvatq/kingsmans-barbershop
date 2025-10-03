import { BlogCardProps } from "@/app/services/ui/blog/types/blog.interface";
import Image from "next/image";

export const BlogCard = ({
  el: { image, title, text, button },
}: BlogCardProps) => (
  <div className="bg-black text-white flex flex-col transition-transform duration-300 hover:shadow-lg group">
    <div className="relative w-full h-[250px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-5 flex flex-col items-start gap-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm font-light">{text}</p>
      <button className="text-[#E9C664] text-sm font-semibold">{button}</button>
    </div>
  </div>
);
