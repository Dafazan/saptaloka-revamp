"use client";
import React, { useState } from "react";
import ButtonA from "../button";

function PortofolioCard({ title, desc }: { title: string; desc: string }) {
  const [ishover, setIshover] = useState(false);
  return (
    <a
      href="/#"
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="w-[285px] h-[400px] relative overflow-hidden"
    >
      <div className="w-full h-full absolute">
        <img src="/porto1.png" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full h-full absolute bg-black opacity-30"></div>
      <div
        className={`w-full h-full flex flex-col duration-300 ${
          ishover == true ? "bg-[#2ABDFB]" : "translate-y-[270px]"
        } p-4 absolute `}
      >
        <h1 className="text-[22px] text-[#F0FDFF] font-bold">{title}</h1>
        {ishover == true ? (
          <>
            <p className="pt-2 text-white text-[14px]">{desc}</p>
          </>
        ) : (
          <></>
        )}
        <div className="w-full h-full  flex flex-col justify-end">
          <div className="flex justify-end">
            <ButtonA text={"READ MORE"} color="#F0FDFF" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortofolioCard;
