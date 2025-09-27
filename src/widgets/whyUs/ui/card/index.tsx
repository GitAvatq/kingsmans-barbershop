import { CardProps } from "../../types/interface.card";
export const Card = ({ el: { icon: Icon, cardDetails, cardTitle } }: CardProps) => (
    <div className='flex flex-col items-center justify-center gap-7 border-2 border-accent text-white px-5 py-6 h-[360px] max-md:h-72'>
        <Icon color='#e9c664' size={40} />
        <h3 className='text-xl font-accent max-md:text-base'>{cardTitle}</h3>
        <p className="text-base font-base max-md:text-xs">{cardDetails}</p>
    </div>
)