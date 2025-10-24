import Image from "next/image"

export const WorkCards = ({ card: { name_hair, picture_hair } }: { card: { name_hair: string, picture_hair: string } }) => {
    return (
        <div className="border relative rounded-2xl h-[400px]">
            <Image className="object-cover w-full h-full " src={picture_hair} width={300} height={100} alt="img of works" />
            <h4 className="text-xl absolute bottom-1.5 left-1.5 py-10 px-10 w-[250px] bg-black/60 text-gold">{name_hair}</h4>
        </div>
    )
}