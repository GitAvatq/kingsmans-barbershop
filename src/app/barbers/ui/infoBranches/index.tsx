import Image from "next/image";
import React from "react";
import logo from "@public/logo.svg";

const InfoBranches = () => {
  return (
    <div className="bg-[url(/branches-map.svg)] h-[60vh] max-lg:h-[50vh] max-md:h-[40vh]">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex items-center h-[60vh] gap-32 max-lg:h-[50vh] max-lg:gap-28 max-md:h-[40vh] max-sm:gap-8 ">
          <Image
            className="max-md:w-[200px] max-sm:w-[150px]"
            src={logo}
            width={293}
            height={293}
            alt="logo"
          />
          <div className="flex flex-col items-start gap-4 mb-5">
            <div className="flex items-center">
              <span className="text-[#D29C4E] text-9xl max-md:text-7xl max-sm:text-5xl">
                150+
              </span>
              <p className="text-[#fff] text-4xl max-md:text-[20px] max-sm:text-[12px]">
                BRANCHES <br /> IN 11 COUTRIES AND 7 <br /> CAPITAL CITIES
              </p>
            </div>
            <h1 className="text-[#fff] text-5xl max-md:text-3xl max-sm:text-[18px]">
              A royal level of barbering
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBranches;
