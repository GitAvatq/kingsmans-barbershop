import { ISocialCardProps } from "../../types/socials.interface";

export const SocialCard = ({ el: { icon: Icon, text, title } }: ISocialCardProps) => (
    <div className="text-white text-center flex flex-col items-center justify-center gap-3">
        <Icon color="#e9c664" size={25} />
        <h3 className="font-abril text-2xl max-md:text-xl uppercase">{title}</h3>
        <p className="font-base text-base">{text}</p>
    </div >
)