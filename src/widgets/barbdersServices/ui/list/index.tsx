import { ListProps } from "../../types/interface.list";

export const List = ({ el: { name: name, price: price } }: ListProps) => (
  <div className="flex">
    <h3>{name}</h3>
    <p>{price}</p>
  </div>
);
