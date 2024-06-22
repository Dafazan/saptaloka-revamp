"use client";
import React from "react";
import { useEffect, useState } from "react";
import SocialLink from "./svgs/sociallink";
import Sldlogo from "./svgs/sldlogo";
import Sldlogosq from "./svgs/sldlogosq";

function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false);

  const [linkhover, setLinkhover] = useState(0);

  const [xbutton, setXbutton] = useState(false);
  const handleX = () => {
    // Set xbutton to true after 0.3 seconds
    setTimeout(() => {
      setXbutton(true);
    }, 300);
  };

  const [isMenuHover, setIsMenuHover] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      // Check if scrollLocation is decreasing
      if (currentScrollLocation < prevScrollLocation) {
        // Scroll location is decreasing
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        // Scroll location is increasing
        setScrollDirection("down");
      }

      // Update prevScrollLocation with currentScrollLocation
      setPrevScrollLocation(currentScrollLocation);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);

  const OpenSidebar = () => {
    setIsSidebar(true);
    handleX();
  };

  const CloseSidebar = () => {
    setIsSidebar(false);
    setXbutton(false);
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <div
          className={`absolute w-full px-[4%] flex justify-between items-center md:py-[25px] py-2 duration-200 
      ${
        scrollLocation >= 100
          ? "bg-[#000820]"
          : "md:bg-transparent bg-[#000820] bg-opacity-40"
      }
      ${
        scrollLocation >= 380 && scrollDirection == "down"
          ? "-translate-y-[90px]"
          : ""
      }
      `}
        >
          <a className="md:block hidden" href="/">
            <Sldlogo />
          </a>
          <a className="md:hidden block" href="/">
            <Sldlogosq />
          </a>
          <div className="flex gap-16 light-text uppercase">
            <div>
              <a
                className="hover:text-[#00ffff] duration-200 md:block hidden"
                href="/newpage"
              >
                CONTACT US
              </a>
            </div>
            <div>
              <a
                className="hover:text-[#00ffff] duration-200 md:block hidden"
                href="/portfolio"
              >
                PORTFOLIO
              </a>
            </div>
            <div
              onClick={OpenSidebar}
              onMouseEnter={() => setIsMenuHover(true)}
              onMouseLeave={() => setIsMenuHover(false)}
              className="flex flex-col gap-1"
            >
              <div
                className={`md:w-12 w-10 h-[5px] ${
                  isMenuHover == true
                    ? "-translate-x-[3px] bg-[#00FFFF]"
                    : "-translate-x-[8px] light-bg "
                } duration-150`}
              ></div>
              <div
                className={`md:w-12 w-10 h-[5px] ${
                  isMenuHover == true
                    ? "-translate-x-[3px] bg-[#00FFFF]"
                    : " light-bg "
                } duration-150`}
              ></div>
              <div
                className={`md:w-12 w-10 h-[5px] ${
                  isMenuHover == true
                    ? "-translate-x-[3px] bg-[#00FFFF]"
                    : "-translate-x-[8px] light-bg "
                } duration-150`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* {isSidebar == true ? (
        <> */}
      <div
        className={`${
          isSidebar == true
            ? ""
            : "md:translate-x-[100%] md:translate-y-0 -translate-y-[100%]"
        } fixed w-full h-full flex z-50 duration-300`}
      >
        <div
          className={`md:w-3/12 w-0 bg-black opacity-35 duration-[3000ms] ${
            isSidebar == true ? "" : "opacity-0"
          }`}
        ></div>
        <div className="md:w-9/12 w-full h-screen bg-[#000820] text-[#2ABDFB] flex-flex-col">
          <div className="md:h-24 h-16 w-full flex justify-between trans md:p-10 py-8 px-3">
            <div></div>
            <div
              onClick={CloseSidebar}
              className="relative md:pe-16 pe-12 z-50"
            >
              <div
                className={`md:w-12 w-10 h-[5px] bg-[#2ABDFB] rotate-45 duration-150 absolute ${
                  xbutton == true ? "" : "translate-x-32 translate-y-32"
                }`}
              ></div>
              <div
                className={`md:w-12 w-10 h-[5px] bg-[#2ABDFB] -rotate-45 duration-150 absolute ${
                  xbutton == true ? "" : "translate-x-32 -translate-y-32"
                }`}
              ></div>
            </div>
          </div>
          <div className="md:px-14 px-7 text-5xl  font-extrabold flex flex-col md:gap-5 gap-2">
            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(1)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-3 "
              >
                {linkhover == 1 ? (
                  <>
                    <img src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a
                  className=" md:text-5xl text-2xl hover:text-[#00FFFF]"
                  href="/newpage"
                >
                  IT SOLUTION
                </a>
              </div>
            </div>
            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(2)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-3 "
              >
                {linkhover == 2 ? (
                  <>
                    <img src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a
                  className=" md:text-5xl text-2xl hover:text-[#00FFFF]"
                  href="/newpage"
                >
                  FARMTECH
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[2px] md:mx-14 m-7 bg-[#2ABDFB]"></div>
          <div className="md:px-14 px-7 md:text-3xl text-xl font-extrabold flex outline-text flex-col md:gap-3 gap-2">
            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(3)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-2 "
              >
                {linkhover == 3 ? (
                  <>
                    <img className="scale-75" src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a className="hover:text-[#00FFFF] " href="/portfolio">
                  PORTFOLIO
                </a>
              </div>
            </div>

            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(4)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-2 "
              >
                {linkhover == 4 ? (
                  <>
                    <img className="scale-75" src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a className="hover:text-[#00FFFF] " href="/about">
                  ABOUT US
                </a>
              </div>
            </div>

            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(5)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-2 "
              >
                {linkhover == 5 ? (
                  <>
                    <img className="scale-75" src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a className="hover:text-[#00FFFF] " href="/newpage">
                  CONTACT US
                </a>
              </div>
            </div>

            <div className="flex">
              <div
                onMouseEnter={() => setLinkhover(6)}
                onMouseLeave={() => setLinkhover(0)}
                className="flex gap-2 "
              >
                {linkhover == 6 ? (
                  <>
                    <img className="scale-75" src="/arrowonly.svg" alt="" />
                  </>
                ) : (
                  <></>
                )}
                <a className="hover:text-[#00FFFF] " href="/newpage">
                  INFORMATION AND NEWS
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[2px] md:mx-14 m-7 bg-[#2ABDFB]"></div>
          <SocialLink />
        </div>
      </div>
    </>
    // ) : (
    //   <></>
    // )}
    // </>
  );
}

export default Navbar;
