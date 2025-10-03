import { FeaturesCardProps } from "../../types/features.interface";
import Image from "next/image";

export const FeaturesCard = ({
  el: { title, description, icon },
}: FeaturesCardProps) => (
  <div className="flex flex-col items-center gap-6 text-center p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="w-[60px] h-[60px] flex items-center justify-center">
      <Image src={icon} alt={title} width={60} height={60} />
    </div>
    <h4 className="text-xl sm:text-2xl font-bold">{title}</h4>
    <p className="text-base sm:text-lg text-gray-600">{description}</p>
  </div>
);
