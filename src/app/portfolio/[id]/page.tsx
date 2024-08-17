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
      const docRef = doc(db, "portfolio", params.id);
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
          <div className=" w-full md:h-[90vh] md:pt-0 pt-20 flex flex-col justify-center ">
            <div className="md:w-[65%] w-full flex flex-col md:gap-10 gap-4">
              <h1 className="md:text-5xl text-xl font-semibold">
                {portfolioDetail.title}
              </h1>
              <div className="md:w-[70%]">
                <p className="md:text-2xl text-md">
                  {portfolioDetail.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[full] flex">
          <div className="md:w-[40%] w-0"></div>
          <div className="md:w-[60%] w-full min-h-[70vh] z-10 grid grid-cols-2 p-5 gap-3">
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>{" "}
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>{" "}
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>{" "}
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>{" "}
            <div className="w-full h-0 relative pb-[100%] bg-yellow-300">
              <img
                src={portfolioDetail.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover m-auto"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="py-10">
        <PortofolioPrev2 />
      </div>
    </div>
  );
}

export default Page;
