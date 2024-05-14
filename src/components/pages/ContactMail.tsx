"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactMail() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-[#D2F2FF] w-full p-[4%] py-[5%] text-[#00103E]">
        <h3 className="text-[44px] font-extrabold leading-[50px]">
          INTERESTED TO WORKING WITH US?
        </h3>
        <h3 className="text-[44px] font-extrabold leading-[50px]">
          CONTACT US!
        </h3>
        <form className="flex mt-10 gap-16">
          <div className="w-3/6 flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">
                WHAT KIND OF SERVICE DO YOU NEED?
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-blue-500 cursor-pointer pr-8"
                  placeholder="Select an option..."
                  onClick={toggleDropdown}
                  value={selectedOption}
                  readOnly
                />
                <div
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${isOpen ? "transform rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <motion.div
                    initial={{ scaleY: 0, transformOrigin: "top" }}
                    animate={{ scaleY: 1, transformOrigin: "top" }}
                    exit={{ scaleY: 0, transformOrigin: "top" }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-2 bg-[#019CDE] shadow-lg w-full"
                  >
                    <ul>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() => selectOption("GENERAL INQUIRY")}
                      >
                        GENERAL INQUIRY
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA ERP"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA ERP
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA MES"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA MES
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA POS"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA POS
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA SOFTWARE DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA SOFTWARE DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA WEBSITE DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA WEBSITE DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA GAME DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA GAME DEVELOPMENT
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">NAME</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">EMAIL</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">PHONE NUMBER</p>
              <input
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-blue-500"
                placeholder=""
              />
            </div>
          </div>
          <div className="w-3/6 flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">SUBJECT</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">MESSAGE</p>
              <textarea
                required
                rows={5}
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full focus:outline-none focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full h-full">
              <button
                type="submit"
                className="w-full h-full bg-[#2ABDFB] hover:bg-[#61d0ff] text-[#D8F3FF] text-[14px] font-bold flex justify-center items-center gap-2 hover:gap-4 duration-200"
              >
                <p>SEND MESSAGE</p>
                <div>
                  <svg
                    width="15"
                    viewBox="0 0 27 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      d="M0 32.7699L8.76057 15.982L0.420617 0L26.2799 16.2528L0 32.7699Z"
                      fill="#D8F3FF"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMail;
