"use client";
import React, { useState } from "react";
import ButtonA from "../button";

function PortofolioCard({
  title,
  desc,
  link,
  image,
}: {
  title: string;
  desc: string;
  link: string;
  image: string;
}) {
  const [ishover, setIshover] = useState(false);
  return (
    <a
      href={link}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="w-full h-[400px] relative overflow-hidden"
    >
      <div className="w-full h-full absolute">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full h-full absolute bg-black opacity-30"></div>
      <div
        className={`absolute w-full h-full flex flex-col  p-4 transition-all duration-300 ${
          ishover == true ? "justify-start bg-[#2ABDFB]" : "justify-end"
        }`}
      >
        <h1 className="text-[22px] text-[#F0FDFF] font-bold">{title}</h1>
        {ishover == true ? (
          <>
            <p className="pt-2 text-white text-[14px]">{desc}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        className={`w-full h-full flex flex-col duration-300 ${
          ishover == true ? "" : "-translate-x-[470px]"
        } p-4 absolute `}
      >
        <div className="w-full h-full  flex flex-col justify-end transi">
          <div className="flex justify-end">
            <ButtonA text={"READ MORE"} color="#F0FDFF" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortofolioCard;
