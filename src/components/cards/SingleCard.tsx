"use client";
import React, { useState } from "react";
import ButtonA from "../button";

function Singlew({
  title,
  desc,
  link,
  image,
  date,
}: {
  title: string;
  desc: string;
  link: string;
  image: string;
  date:any
}) {
  const [ishover, setIshover] = useState(false);
  return (
    <a
    href={link}
   
      className="w-full md:h-[400px] relative overflow-hidden"
    >
        <div className="flex">

      <div className="w-full h-full ">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
     
      <div
        className={` w-full h-full flex flex-col  p-4 transition-all duration-300 ${
          ishover == true ? "justify-start bg-[#2ABDFB]" : "justify-end"
        }`}
      >
        <h1 className="md:text-[16px] text-[10px] text-[#F0FDFF] font-semibold">{date}</h1>
        <h1 className="md:text-[22px] text-[16px] text-[#F0FDFF] font-bold">{title}</h1>
       
          <>
            <p className="pt-2 text-white text-[14px]">{desc}</p>
          </>
       
      </div>
      <div
        className={`w-full h-full flex flex-col duration-300 ${
          ishover == true ? "" : ""
        } p-4 absolute `}
      >
        <div className="w-full h-full  flex flex-col justify-end transi">
          <a  href={link}
      className="flex justify-end">
            <ButtonA text={"READ MORE"} color="#F0FDFF" />
          </a>
        </div>
      </div>
        </div>
    </a>
  );
}

export default Singlew;
