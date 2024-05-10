"use client";
import React from "react";
import { useEffect, useState } from "react";

function Changecolor({ children }: any) {
  const [scrollLocation, setScrollLocation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLocation(window.scrollY); // Update scroll location state
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <>
      <div className={`w-full bg-[#000D32] `}>
        <p className="fixed z-50 bg-white">{scrollLocation}</p>
        {children}
      </div>
    </>
  );
}

export default Changecolor;
