"use client";
import React, { useState } from "react";
import ArrowR from "../cards/arrowonly";

function CoreValue() {
  const [linkhover, setLinkhover] = useState(0);
  return (
    <>
      <main className="py-[4%] p-[4%] md:block hidden 2xl:px-[10%]">
        <section className="w-full flex flex-col justify-center items-center">
          <h1 className="text-blue-light text-[30px] font-extrabold">
            WE&rsquo;RE SAPTALOKA DIGITAL,{" "}
          </h1>
          <h1 className="text-blue-light text-[30px] font-extrabold">
            WE&rsquo;RE ALIVES!{" "}
          </h1>
        </section>
        <section className="flex mt-[50px]">
          <div className="text-[36px] font-extrabold w-4/12">
            <div
              onMouseEnter={() => setLinkhover(1)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 1 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">A</span>MANAH
              </h2>
            </div>
            <div
              onMouseEnter={() => setLinkhover(2)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 2 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">L</span>OYAL
              </h2>
            </div>
            <div
              onMouseEnter={() => setLinkhover(3)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 3 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">I</span>NNOVATIVE
              </h2>
            </div>
            <div
              onMouseEnter={() => setLinkhover(4)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 4 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">V</span>ISIONER
              </h2>
            </div>
            <div
              onMouseEnter={() => setLinkhover(5)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 5 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">E</span>NTHUSIASTIC
              </h2>
            </div>
            <div
              onMouseEnter={() => setLinkhover(6)}
              onMouseLeave={() => setLinkhover(0)}
              className="flex items-center gap-3 "
            >
              {linkhover == 6 ? (
                <>
                  <ArrowR />
                </>
              ) : (
                <></>
              )}
              <h2 className="text-[#019CDE]">
                <span className="text-blue-light">S</span>OLUTIVE
              </h2>
            </div>
          </div>
          <div className="w-8/12">
            {linkhover == 1 ? (
              <p className="text-blue-light text-[18px]">
                SAPTALOKA DIGITAL MEMEGANG TEGUH KEPERCAYAAN YANG DIBERIKAN
                DENGAN PENUH INTEGRITAS DAN TANGGUNG JAWAB, MENJAGA AMANAH
                TERSEBUT SEBAGAI LANDASAN UTAMA DALAM SETIAP LANGKAH DAN
                KEPUTUSAN YANG DIAMBIL.
              </p>
            ) : linkhover == 2 ? (
              <p className="text-blue-light text-[18px]">Ini L.</p>
            ) : linkhover == 3 ? (
              <p className="text-blue-light text-[18px]">Ini I.</p>
            ) : linkhover == 4 ? (
              <p className="text-blue-light text-[18px]">Ini V.</p>
            ) : linkhover == 5 ? (
              <p className="text-blue-light text-[18px]">Ini E.</p>
            ) : linkhover == 6 ? (
              <p className="text-blue-light text-[18px]">Ini S.</p>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default CoreValue;
