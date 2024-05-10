import React from "react";
import PortofolioCard from "../cards/PortofolioCard";

function PortofolioPrev() {
  return (
    <>
      <div className="h-24 w-full flex items-center justify-center">
        <h3 className="text-[28px] font-bold text-[#D8F3FF]">
          PROJECTS WE&rsquo;VE DONE
        </h3>
      </div>
      <div className="flex w-full gap-10 px-[4%]">
        <PortofolioCard
          link="/portofolio/#"
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
          image="/porto1.png"
        />
        <PortofolioCard
          link="/portofolio/#"
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
          image="/porto1.png"
        />
        <PortofolioCard
          link="/portofolio/#"
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
          image="/porto1.png"
        />
        <a
          href="/portofolio"
          className="w-[80%] h-[400px] portbtn bg-[#2ABDFB] text-[#F0FDFF] hover:translate-x-3 duration-200 flex flex-col justify-center"
        >
          <div className="flex justify-end p-6">
            <p className="w-[80%] text-end font-medium ">SEE MORE PORTOFOLIO</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default PortofolioPrev;
