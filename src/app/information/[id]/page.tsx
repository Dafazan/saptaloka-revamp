"use client";
import React, { useEffect, useState } from "react";
import PortfolioDetail from "@/components/portfolioComponents/portfolioDetail";
import { db } from "@/db/firebase";
import { doc, getDoc } from "firebase/firestore";
import { PortofolioPrev2 } from "@/components/pages/PortofolioPrev";

function Page({ params }: { params: any }) {
  interface Portfolio {
    img: string;

    description: string;
    title: string;
    id: string;
  }

  const [portfolioDetail, setPortfolioDetail] = useState<Portfolio | null>(
    null
  );

  useEffect(() => {
    getPortfolioDetail();
  }, []);

  async function getPortfolioDetail() {
    try {
      const docRef = doc(db, "blog", params.id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.log("No document found with the given ID");
        return;
      }

      const data = { ...(docSnap.data() as Portfolio), id: docSnap.id };
      setPortfolioDetail(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!portfolioDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-white px-[4%] 2xl:px-[13%]">
        <div className="sticky top-0 z-20">
          
          <div className=" w-full mx-aut  md:pt-0 pt-20 flex flex-col justify-center ">
            <div className="md:w-[65%] w-full flex flex-col md:gap-10 gap-4">
              <h1 className="md:text-5xl md:pt-56 text-xl font-semibold">
                {portfolioDetail.title}
              </h1>
              <div className="w-full ">
              <img
                src={portfolioDetail.img}
                alt=""
                className=""
              />
            </div>{" "}
              <div className="md:w-[70%]">
                <p className="md:text-2xl text-md">
                  {portfolioDetail.description}
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="py-10">
       
      </div>
    </div>
  );
}

export default Page;
