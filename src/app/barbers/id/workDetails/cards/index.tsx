import Image from "next/image"
import { IWorkProps } from "../../types/work.interface"

export const WorkCards = ({ card: { text, img } }: IWorkProps) => {
    return (
        <div className="border relative rounded-2xl h-[400px]">
            <Image className="object-cover w-full h-full " src={img} width={300} height={100} alt="img of works" />
            <h4 className="text-xl absolute bottom-1.5 left-1.5 py-10 px-10 w-[250px] bg-black/60 text-gold">{text}</h4>
        </div>
    )
}