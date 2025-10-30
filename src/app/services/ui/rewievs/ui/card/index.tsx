import Image from "next/image";
import { ReviewCardProps } from "../../types/rewievs.interface";

export const ReviewCard = ({
  el: { image, text, name, location, createdAt },
}: ReviewCardProps) => {
  const date = createdAt.slice(0, 7);
  const time = createdAt.slice(11, 16);
  return (
    <div className="flex flex-col items-start gap-6 max-w-full h-96 text-start bg-background p-10 rounded-2xl relative">
      <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <h4 className="text-xl font-bold text-[#E9C664]">{name}</h4>
      <p className="text-sm text-white font-normal">{text}</p>
      <div className="flex w-full justify-between items-center absolute bottom-3 left-0 px-6">
        <p className="text-white text-start lowercase text-base">{location}</p>
        <div>
          <p className="text-white text-xs text-start">
            {date} {time}
          </p>
          <p className="text-white text-xs text-start"></p>
        </div>
      </div>
    </div>
  );
};
