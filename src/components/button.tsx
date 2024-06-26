"use client";
import React, { useState } from "react";

function ButtonA({ text, color }: { text: string; color: string }) {
  const [ishover, setIshover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="flex items-center"
    >
      <p
        className={`${
          ishover == true ? "pe-1" : "pe-2"
        } font-mediun md:text-xl text-xs duration-100 text-[${color}]`}
      >
        {text}
      </p>
      <div
        className={`${
          ishover == true ? "scale-105" : "md:scale-100 scale-75"
        } duration-100`}
      >
        <svg
          width="27"
          height="33"
          viewBox="0 0 27 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 32.7699L8.76057 15.982L0.420617 0L26.2799 16.2528L0 32.7699Z"
            fill={color}
          />
        </svg>
      </div>
    </button>
  );
}

export default ButtonA;
