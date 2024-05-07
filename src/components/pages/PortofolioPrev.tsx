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
      <div className="flex w-full gap-10 px-[4%]">
        <PortofolioCard
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
        />
        <PortofolioCard
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
        />
        <PortofolioCard
          title="PT TELKOM INFRA SPARE MANAGEMENT"
          desc="An inventory application for regulating entry and exit of goods
              and cables, also manages inventory in the warehouse at PT Telkom
              Infra."
        />
      </div>
    </>
  );
}

export default PortofolioPrev;
