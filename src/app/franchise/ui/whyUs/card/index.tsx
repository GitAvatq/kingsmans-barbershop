import { IWhyCardProps } from "../types/why.interface";

export const Card = ({ el }: IWhyCardProps) => (
    <div className="flex flex-col">
        <div className="font-base text-5xl text-accent">{el.id}</div>
        <div className="bg-black text-center flex flex-col place-items-center justify-center gap-2 py-7 px-6 text-white max-md:h-40">
            <h4 className="text-xl font-abril">{el.title}</h4>
            <p className="text-base ">{el.text}</p>
        </div>
    </div>
)