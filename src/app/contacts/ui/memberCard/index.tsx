import border from "@public/member-border.svg"
import Image from "next/image"
import { IMemberProps } from "../../types/member.interface"

export const MemberCard = ({ el: { name, position, insta, img } }: IMemberProps) => (
    <div className="relative">
        <div className="border border-gold relative w-72 h-[490px] text-white rounded-2xl overflow-hidden">
            <Image className="absolute top-5 left-2 overflow-hidden z-20" src={border} width={270} height={450} alt="Member Border" />
            <Image src={img} className="absolute inset-0 z-10 object-cover w-full h-full" width={270} height={450} alt="members img" />
            <div className="absolute bottom-5 z-20 rounded-2xl w-full h-[200px] bg-black/70 flex flex-col items-center justify-center">
                <h3 className="opacity-60">{name}</h3>
                <p className="uppercase opacity-60">{position}</p>
                <span className="uppercase opacity-60">insta:{insta}</span>
            </div>
        </div>
    </div>
)