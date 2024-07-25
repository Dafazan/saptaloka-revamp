"use client";
import React, { useEffect, useRef, useState } from "react";
import PortofolioCard from "../cards/PortofolioCard";

import { db } from "@/db/firebase";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
  orderBy,
  limit,
  Firestore,
  serverTimestamp,
} from "firebase/firestore";

interface Portfolios {
  id: string;
  img: string;
  title: string;
  description: string;
  // Add more properties as needed
}

function PortofolioPrev() {
  const [portfolios, setPortfolios] = useState<Portfolios[]>([]);
  useEffect(() => {
    getPortfolios();
  }, []);
  async function getPortfolios() {
    try {
      const ordersRef = collection(db, "portfolio");
      const q = query(ordersRef, orderBy("createdAt", "asc"), limit(3));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No documents found with status 'public'");
        return;
      }

      let data: Portfolios[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...(doc.data() as Portfolios), id: doc.id });
      });
      setPortfolios(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full md:bg-transparent bg-[#2ABDFB] -translate-y-[1px]">
        <div className="h-24 w-full flex items-center justify-center">
          <h3 className="md:text-[28px] text-[18px] font-bold text-[#D8F3FF]">
            PROJECTS WE&rsquo;VE DONE
          </h3>
        </div>
        <div className="flex md:flex-row flex-col w-full md:gap-10 gap-5 px-[4%] 2xl:px-[13%]">
          {portfolios.map((data, i) => (
            <>
              <PortofolioCard
                link={`/portfolio/${data.id}`}
                title={data.title}
                desc={data.description}
                image={data.img}
              />
            </>
          ))}

          <a
            href="/portofolio"
            className="w-[80%] hidden md:h-[400px] portbtn bg-[#2ABDFB] md:text-[#F0FDFF] text-[#000d32] md:hover:translate-x-3 duration-200 md:flex flex-col justify-center"
          >
            <div className="flex md:justify-end md:p-6 justify-center text-center">
              <p className="md:w-[80%] w-full text-end font-medium ">
                SEE MORE PORTFOLIO
              </p>
            </div>
          </a>
          <a
            href="/portofolio"
            className="w-full md:hidden flex justify-center py-2"
          >
            <div className="flex md:justify-end md:p-6 justify-center text-center">
              <p className="md:w-[80%] w-full text-end font-medium ">
                SEE MORE PORTFOLIO
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full h-10 bg-[#2ABDFB] block md:hidden upsharp -translate-y-[2px]"></div>
    </div>
  );
}

export default PortofolioPrev;
