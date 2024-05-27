"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  Firestore,
  serverTimestamp,
} from "firebase/firestore";

interface Clients {
  id: string;
  img: string;
  // Add more properties as needed
}

function ClientsPrev() {
  const [carousels, setCarousels] = useState(0);

  const handlePrev2 = () => {
    setCarousels((prevState) => Math.max(prevState - 1, 0));
    // Ensure carousels does not go below 0
  };

  const handleNext2 = () => {
    setCarousels((prevState) => Math.min(prevState + 1, 5));
  };
  const handlePrev3 = () => {
    decrementValue();
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext3 = () => {
    incrementValue();
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderRef = useRef<Slider>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Display two slides at a time
    slidesToScroll: 1,
    // Scroll two slides at a time
  };

  const [value, setValue] = useState(0);
  const incrementValue = () => {
    setValue((prevValue) => (prevValue + 1) % 11); // Loop from 0 to 10
  };

  const decrementValue = () => {
    setValue((prevValue) => {
      if (prevValue === 0) {
        return 8; // If value is 0, loop back to 10
      } else {
        return prevValue - 1;
      }
    });
  };

  const [clients, setClients] = useState<Clients[]>([]);
  const [partners, setPartners] = useState<Clients[]>([]);
  useEffect(() => {
    getClients();
    getPartners();
  }, []);
  async function getClients() {
    try {
      const ordersRef = collection(db, "brand");
      const q = query(ordersRef);
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No documents found with status 'public'");
        return;
      }

      let data: Clients[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...(doc.data() as Clients), id: doc.id });
      });
      setClients(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function getPartners() {
    try {
      const ordersRef = collection(db, "partner_saptaloka");
      const q = query(ordersRef);
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No documents found with status 'public'");
        return;
      }

      let data: Clients[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...(doc.data() as Clients), id: doc.id });
      });
      setPartners(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="h-24 w-full flex items-center justify-center mt-20">
        <h3 className="text-[28px] font-bold text-[#D8F3FF]">OUR CLIENTS</h3>
      </div>
      <div className="flex justify-center gap-5 px-[5%]">
        <button className="bg-transparent border-none" onClick={handlePrev3}>
          <svg
            className="rotate-180"
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
              fill="#2ABDFB"
            />
          </svg>
        </button>
        <Slider
          {...settings}
          className="w-[96%] "
          ref={sliderRef}
          arrows={false}
          autoplay={true}
          autoplaySpeed={2000}
        >
          {clients.map((data, i) => (
            <>
              <div className="px-5">
                <img key={i} src={data.img} alt={data.id} />
              </div>
            </>
          ))}
        </Slider>

        <button className="bg-transparent border-none" onClick={handleNext3}>
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
              fill="#2ABDFB"
            />
          </svg>
        </button>
      </div>
      <div className="h-24 w-full flex items-center justify-center mt-10">
        <h3 className="text-[28px] font-bold text-[#D8F3FF]">OUR PARTNER</h3>
      </div>
      <div className="px-[4%] flex flex-wrap gap-7 justify-center mb-20">
        {partners.map((data, i) => (
          <>
            <div className="w-36">
              <img src={data.img} alt="image tidak ada" />
            </div>

          </>
        ))}

      </div>
    </>
  );
}

export default ClientsPrev;
