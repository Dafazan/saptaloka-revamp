import React from "react";
import ButtonA from "../button";

function Landingarea() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Subtract.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-full absolute">
        <div className="w-full h-screen flex flex-col">
          <div className=" 2xl:px-[10%] h-[80%] inset-0 flex md:flex-row flex-col items-center w-full px-[4%] md:py-0 py-[50%]">
            <div className="text-white w-full flex flex-col items-start text-start md:text-[56px] text-[26px] font-bold md:leading-[65px] leading-[28px] md:mb-0 mb-5">
              <h1 className="light-text">
                LEAD YOUR BUSINESS TO DIGITAL TRANSFORMATION
              </h1>
            </div>
            <div className="text-white w-full flex flex-col md:items-end md:text-end items-start text-start md:text-[26px] text-[12px] font-mediun">
              <div className="flex w-full">
                <div className="w-0 md:w-4/12 "></div>
                <h1 className="w-full md:w-8/12">
                  WE DEVELOP SOLUTION TO SOLVE DIGITAL TRANSFORMATION FOR EASIER
                  LIFE
                </h1>
              </div>
              <div className="md:text-[18px] text-[12px]  uppercase pt-6">
                <a href="/about">
                  <ButtonA text={"MORE ABOUT US"} color="#2ABDFB" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pt-14 h-[20%] flex flex-col items-center">
            <a href="#services">
              <svg
                className="hover:scale-110 duration-150"
                width="48"
                height="28"
                viewBox="0 0 48 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-6.48499e-05 -2.09815e-06L24.5903 9.14421L48 0.439014L24.1936 27.4308L-6.48499e-05 -2.09815e-06Z"
                  fill="#2ABDFB"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingarea;
