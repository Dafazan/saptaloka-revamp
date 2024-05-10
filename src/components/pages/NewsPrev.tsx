import React from "react";
import NewsCard from "../cards/NewsCard";

function NewsPrev() {
  return (
    <>
      <div className="bg-[#019CDE] w-full p-[4%] text-[#D8F3FF]">
        <h2 className="text-[44px] font-extrabold mb-5">
          INFORMATION AND NEWS
        </h2>
        <div className="w-full h-[520px] flex">
          <div className="w-2/6 pe-10 h-full">
            <NewsCard
              title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
              date="04 JANUARY 2025"
              link="/news/#"
              image="/porto1.png"
            />
          </div>
          <div className="w-4/6 h-full">
            <div className="grid grid-cols-2 gap-10 w-full h-full">
              <NewsCard
                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                date="04 JANUARY 2025"
                link="/news/#"
                image="/porto1.png"
              />
              <NewsCard
                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                date="04 JANUARY 2025"
                link="/news/#"
                image="/porto1.png"
              />
              <NewsCard
                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                date="04 JANUARY 2025"
                link="/news/#"
                image="/porto1.png"
              />
              <NewsCard
                title="PERTEMUAN CEO SAPTALOKA DIGITAL DENGAN BILL GATES"
                date="04 JANUARY 2025"
                link="/news/#"
                image="/porto1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPrev;
