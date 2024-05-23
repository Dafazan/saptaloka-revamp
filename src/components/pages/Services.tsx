import React from "react";
import ButtonA from "../button";

function Services() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-10">
      <h3 className="text-[28px] font-bold text-[#D8F3FF]">OUR SERVICES</h3>
      <div className="w-full  relative h-[315px] flex flex-col justify-center my-10">
        <div className="w-full  h-[300px] absolute flex flex-col">
          <div className="bg-[#2ABDFB] h-[80%] flex ps-[4%] ">
            <div className="  w-full h-full flex flex-col pt-5">
              <h2 className="text-[44px] flex flex-col font-extrabold">
                <span className="h-12">SAPTALOKA DIGITAL</span>{" "}
                <span>IT SOLUTION</span>
              </h2>
              <p>
                SPECIALIST CONSULTENCY IN MULTI PLATFORM SOFTWARE, ENTERPRISES
                RESOURCE PLANNING (ERP), MANUFACTURING EXECUTION SYSTEM (MES),
                AND COMPANY PROFILE WEBSITE.
              </p>
            </div>
            <div className="w-full h-full"></div>
          </div>
          <div className=" w-[50%] h-[20%] ps-[4%] text-[#D2F2FF] z-40 flex flex-col justify-center">
            <ButtonA text="MORE DETAIL" color="#D2F2FF" />
          </div>
        </div>
        <div className="w-full  h-[315px] absolute flex justify-end">
          <div className="h-full serimg bg-blue-300 w-[45%]">
            <img
              src="/Rectangle 62.png"
              className="object-cover w-full h-full"
              alt="a"
            />
          </div>
        </div>
      </div>

      <div className="w-full  relative h-[315px] flex flex-col justify-center my-10 ">
        <div className="w-full  h-[300px] absolute flex flex-col items-end">
          <div className="bg-[#2ABDFB] w-full h-[80%] flex pe-[4%]  ">
            <div className="w-full h-full"></div>
            <div className="  w-full h-full flex flex-col pt-5 items-end">
              <h2 className="text-[44px] text-end flex flex-col font-extrabold">
                SAPTALOKA FARMTECH
              </h2>
              <p className="text-end">
                OPTIMIZE FARMING WITH INNOVATIVE TECHNOLOGY FOR EASIER
                AGRICULTURAL OPERATIONS
              </p>
            </div>
          </div>
          <div className=" w-[50%] h-[20%] pe-[4%] text-[#D2F2FF] z-40 flex flex-col justify-center items-end">
            <ButtonA text="MORE DETAIL" color="#D2F2FF" />
          </div>
        </div>
        <div className="w-full  h-[315px] absolute flex justify-start">
          <div className="h-full serimgf bg-blue-300 w-[45%]">
            <img
              src="/Rectangle 61.png"
              className="object-cover w-full h-full"
              alt="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
