// 'use client'
// import React, { useEffect, useState } from "react";
// import PortfolioDetail from '@/components/portfolioComponents/portfolioDetail'
// import { db } from "@/db/firebase";
// import {
//     doc,
//     getDoc,
// } from "firebase/firestore";

// function Page({ params }: { params: any }) {
//     interface Content {
//         img: string[];
//         text: string;
//     }

//     interface Portfolio {
//         cover: string;
//         content: Content[];
//         description: string;
//         title: string;
//         id: string;

//     }

//     const [portfolioDetail, setPortfolioDetail] = useState<Portfolio | null>(null);

//     useEffect(() => {
//         getPortfolioDetail();
//     }, []);

//     async function getPortfolioDetail() {
//         try {
//             const docRef = doc(db, "portfolio", params.id);
//             const docSnap = await getDoc(docRef);

//             if (!docSnap.exists()) {
//                 console.log("No document found with the given ID");
//                 return;
//             }

//             const data = { ...(docSnap.data() as Portfolio), id: docSnap.id };
//             setPortfolioDetail(data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     return (
//         <div>
//             {portfolioDetail && 
//             <PortfolioDetail

//                     title={portfolioDetail.title}
//                     description={portfolioDetail.description}
//                     img={""} // Pass the array of images correctly
//                     text={portfolioDetail.content.map((contentItem, index) =>(contentItem.img)}
//                     cover={portfolioDetail.cover}
//                 />}
//         </div>
//     );
// }

// export default Page;
"use client"
import React, { useEffect, useState } from "react";
import PortfolioDetail from '@/components/portfolioComponents/portfolioDetail';
import { db } from "@/db/firebase";
import { doc, getDoc } from "firebase/firestore";

function Page({ params }: { params: any }) {
    interface Content {
        img: string[]; // Array of image URLs as strings
        text: string;
    }

    interface Portfolio {
        cover: string;
        content: Content[];
        description: string;
        title: string;
        id: string;
    }

    const [portfolioDetail, setPortfolioDetail] = useState<Portfolio | null>(null);

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

    // Flatten the nested img arrays
    const imgArray: string[] = portfolioDetail.content.reduce((acc: string[], curr: Content) => {
        return acc.concat(curr.img);
    }, []);

    return (
        <div>
            <PortfolioDetail
                cover={portfolioDetail.cover}
                title={portfolioDetail.title}
                description={portfolioDetail.description}
                img={imgArray}
                text={portfolioDetail.content.map(contentItem => contentItem.text).join('\n')}
            />
        </div>
    );
}

export default Page;
