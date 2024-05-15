"use client";
import React from "react";
import { useEffect, useState } from "react";
import SocialLink from "./svgs/sociallink";
import Sldlogo from "./svgs/sldlogo";
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
          className={`absolute w-full px-[4%] flex justify-between items-center py-[25px] duration-200 
      ${scrollLocation >= 100 ? "bg-[#000820]" : "bg-transparent"}
      ${scrollLocation >= 380 && scrollDirection == "down"
              ? "-translate-y-[90px]"
              : ""
            }
      `}
        >
          <a href="/">
            <Sldlogo />
          </a>
          <div className="flex gap-16 light-text uppercase">
            <div>
              <a className="hover:text-[#00ffff] duration-200" href="/contact">
                CONTACT US
              </a>
            </div>
            <div>
              <a className="hover:text-[#00ffff] duration-200" href="/portfolio">
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
                className={`w-12 h-[5px] ${isMenuHover == true
                  ? "-translate-x-[3px] bg-[#00FFFF]"
                  : "-translate-x-[8px] light-bg "
                  } duration-150`}
              ></div>
              <div
                className={`w-12 h-[5px] ${isMenuHover == true
                  ? "-translate-x-[3px] bg-[#00FFFF]"
                  : " light-bg "
                  } duration-150`}
              ></div>
              <div
                className={`w-12 h-[5px] ${isMenuHover == true
                  ? "-translate-x-[3px] bg-[#00FFFF]"
                  : "-translate-x-[8px] light-bg "
                  } duration-150`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {isSidebar == true ? (
        <>
          <div className="fixed w-full h-full flex z-50">
            <div className="w-3/12 bg-black opacity-35"></div>
            <div className="w-9/12 h-screen bg-[#000820] text-[#2ABDFB] tran flex-flex-col">
              <div className="h-24 w-full flex justify-between trans p-10">
                <div></div>
                <div onClick={CloseSidebar} className="relative pe-16">
                  <div
                    className={`w-12 h-[5px] bg-[#2ABDFB] rotate-45 duration-150 absolute ${xbutton == true ? "" : "translate-x-32 translate-y-32"
                      }`}
                  ></div>
                  <div
                    className={`w-12 h-[5px] bg-[#2ABDFB] -rotate-45 duration-150 absolute ${xbutton == true ? "" : "translate-x-32 -translate-y-32"
                      }`}
                  ></div>
                </div>
              </div>
              <div className="px-14 text-5xl  font-extrabold flex flex-col gap-5">
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
                    <a className="hover:text-[#00FFFF]" href="/#">
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
                    <a className="hover:text-[#00FFFF]" href="/#">
                      FARMTECH
                    </a>
                  </div>
                </div>
              </div>
              <div className=" h-[2px] mx-14 my-7 bg-[#2ABDFB]"></div>
              <div className="px-14 text-3xl font-extrabold flex outline-text flex-col gap-3">
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
                    <a className="hover:text-[#00FFFF] " href="/contact">
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
                    <a className="hover:text-[#00FFFF] " href="/information">
                      INFORMATION AND NEWS
                    </a>
                  </div>
                </div>
              </div>
              <div className=" h-[2px] mx-14 my-7 bg-[#2ABDFB]"></div>
              <SocialLink />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
