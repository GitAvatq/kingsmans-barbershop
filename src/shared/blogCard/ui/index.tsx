import { BlogCardProps } from "@/app/services/types/blog.interface";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  el: { image, name, text, button },
}: BlogCardProps) => (
  <div className="bg-black text-white flex flex-col transition-transform duration-300 hover:shadow-lg group h-96">
    <div className="relative w-full h-[250px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-5 flex flex-col items-start gap-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm font-light">{text}</p>
      <Link href={"/blog/blogPage"}>
        <button className="text-[#E9C664] text-sm font-semibold border-b border-transparent hover:border-b hover:border-gold transition-all cursor-pointer">
          {button}
        </button>
      </Link>
    </div>
  </div>
);
