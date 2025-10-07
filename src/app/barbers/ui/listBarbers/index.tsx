import React from "react";
import { dataBarbersList } from "./model";
import { BarbersCard } from "./ui/card";
import vector1 from "@public/vector1.svg";
import vector2 from "@public/vector2.svg";
import Image from "next/image";

const ListBanners = () => {
  return (
    <section className="py-16 relative max-sm:py-5">
      <div className="max-w-[1240px] mx-auto px-5">
        <h1 className="text-[#fff] text-4xl font-light text-center mb-16 max-sm:mb-8 max-sm:text-2xl">
          Your Style Experts
        </h1>
        <Image
          className="absolute left-0 top-20  hidden lg:block"
          src={vector1}
          width={125}
          height={125}
          alt="vector"
        />
        <Image
          className="absolute right-0 top-20  hidden lg:block"
          src={vector2}
          width={120}
          height={120}
          alt="vector"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {dataBarbersList.map((el) => (
            <BarbersCard key={el.id} barber={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListBanners;
