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
    <>
      <div className="h-24 w-full flex items-center justify-center">
        <h3 className="text-[28px] font-bold text-[#D8F3FF]">
          PROJECTS WE&rsquo;VE DONE
        </h3>
      </div>
      <div className="flex w-full gap-10 px-[4%]">
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
          className="w-[80%] h-[400px] portbtn bg-[#2ABDFB] text-[#F0FDFF] hover:translate-x-3 duration-200 flex flex-col justify-center"
        >
          <div className="flex justify-end p-6">
            <p className="w-[80%] text-end font-medium ">SEE MORE PORTFOLIO</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default PortofolioPrev;
