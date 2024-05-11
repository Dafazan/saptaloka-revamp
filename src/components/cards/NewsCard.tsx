"use client";
import React, { useState } from "react";
import ButtonA from "../button";

function NewsCard({
  title,
  date,
  link,
  image,
}: {
  title: string;
  date: string;
  link: string;
  image: string;
}) {
  const [ishover, setIshover] = useState(false);
  return (
    <>
      <a
        href={link}
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
        className=" h-full w-full overflow-hidden"
      >
        <div className="relative w-full min-h-full">
          <div className="w-full h-full absolute overflow-hidden">
            <img
              src={image}
              className={` object-cover duration-300 ${
                ishover == true ? "w-[115%] h-[115%]" : "w-full h-full"
              }`}
              alt=""
            />
          </div>
          <div
            className={`w-full h-full  absolute ${
              ishover == true ? " bg-black opacity-40" : "bg-transparent"
            }`}
          ></div>
          <div
            className={`w-full h-full flex flex-col absolute p-5 duration-300 overflow-hidden ${
              ishover == true
                ? " justify-between "
                : "bg-transparent justify-end "
            }`}
          >
            <div
              className={` w-full  flex flex-col  ${
                ishover == true ? "justify-start" : "justify-end"
              } `}
            >
              <p className="text-[19px] mb-2 text-[#F0FDFF]">{date}</p>
              <h3 className="text-[22px] text-[#F0FDFF] font-bold line-clamp-3">
                {title}
              </h3>
            </div>
            <div
              className={`w-full duration-300 ${
                ishover == true ? "" : "-translate-x-[270px]"
              }`}
            >
              {ishover == true ? (
                <>
                  <div
                    className={`w-full duration-300 ${
                      ishover == true ? "" : ""
                    }`}
                  >
                    <ButtonA text={"READ MORE"} color="#F0FDFF" />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default NewsCard;
