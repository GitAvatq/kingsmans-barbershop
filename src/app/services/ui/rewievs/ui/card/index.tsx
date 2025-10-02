import Image from "next/image";
import { ReviewCardProps } from "../../types/rewievs.interface";

export const ReviewCard = ({
  el: { image, text, name, location },
}: ReviewCardProps) => (
  <div className="flex flex-col items-center gap-6 max-w-[310px] text-center">
    <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="object-cover"
      />
    </div>
    <p className="text-sm font-normal">{text}</p>
    <h4 className="text-lg font-bold text-[#E9C664]">
      {name}, {location}
    </h4>
  </div>
);
