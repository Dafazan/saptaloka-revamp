
"use client";
import PortofolioCard from '../cards/PortofolioCard'
import React, { useEffect, useRef, useState } from "react";


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

interface Portfolios {
    id: string;
    img: string;
    title: string;
    description: string;
    // Add more properties as needed
}
function FeaturedProject() {
    const [portfolios, setPortfolios] = useState<Portfolios[]>([]);
    useEffect(() => {
        getPortfolios();
    }, []);
    async function getPortfolios() {
        try {
            const ordersRef = collection(db, "portfolio");
            const q = query(ordersRef);
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
            <div className=''>
                <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>FEATURED PROJECTS</h2>

                <div className="md:flex grid grid-cols-1 w-full gap-10 px-[4%]">

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

                </div>
            </div>
            <div className=''>
                <h2 className='text-blue-light font-extrabold text-[30px] p-[4%]'>OTHER PROJECTS</h2>

                <div className="grid-cols-1 grid md:grid-cols-4  w-full gap-10 px-[4%]">
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
                    

                </div>
            </div>
        </>
    )
}

export default FeaturedProject