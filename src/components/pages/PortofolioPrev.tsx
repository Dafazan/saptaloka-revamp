import React from "react";
import PortofolioCard from "../cards/PortofolioCard";

function PortofolioPrev() {
  return (
    <>
      <div className="h-24 w-full flex items-center justify-center">
        <h3 className="text-[28px] font-bold text-[#00103E]">
          PROJECTS WE&rsquo;VE DONE
        </h3>
      </div>
      <div className="bg-red-900 flex w-full gap-10 px-[4%]">
        <PortofolioCard />
        <div className="bg-blue-800 w-[290px] h-[400px]">A</div>
        <div className="bg-blue-800 w-[290px] h-[400px]">A</div>
      </div>
    </>
  );
}

export default PortofolioPrev;
