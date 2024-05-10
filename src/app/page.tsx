import ButtonA from "@/components/button";
import Image from "next/image";
import Changecolor from "./changecolor";
import PortofolioPrev from "@/components/pages/PortofolioPrev";
import ClientsPrev from "@/components/pages/ClientsPrev";
import CoreValue from "@/components/pages/CoreValue";
import ContactMail from "@/components/pages/ContactMail";
import NewsPrev from "@/components/pages/NewsPrev";

export default function Home() {
  return (
    <main>
      <Changecolor>
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
              <div className=" h-[80%] inset-0 flex items-center w-full px-[4%]">
                <div className="text-white w-full flex flex-col items-start text-start text-[56px] font-bold leading-[65px]">
                  <h1 className="light-text">
                    LEAD YOUR BUSINESS TO DIGITAL TRANSFORMATION
                  </h1>
                </div>
                <div className="text-white w-full flex flex-col items-end text-end text-[26px] font-mediun">
                  <div className="flex w-full">
                    <div className="w-4/12 "></div>
                    <h1 className="w-8/12">
                      WE DEVELOP SOLUTION TO SOLVE DIGITAL TRANSFORMATION FOR
                      EASIER LIFE
                    </h1>
                  </div>
                  <div className="text-[18px] uppercase pt-6">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M-6.48499e-05 -2.09815e-06L24.5903 9.14421L48 0.439014L24.1936 27.4308L-6.48499e-05 -2.09815e-06Z"
                      fill="#2ABDFB"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="flex flex-col">
          <div className="h-24 w-full flex items-center justify-center">
            <h3 className="text-[28px] font-bold text-[#D8F3FF]">
              OUR SERVICES
            </h3>
          </div>
          <div className="w-full"></div>
          <div className="flex flex-col gap-24"></div>
          <PortofolioPrev />
          <ClientsPrev />
          <CoreValue />
          <ContactMail />
          <NewsPrev />
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </Changecolor>
    </main>
  );
}
