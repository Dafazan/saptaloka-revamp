import React from "react";
import Image from "next/image";
import LandingPort from "@/components/portfolioComponents/landingPorto";
import OtherPost from "@/components/InfandNewsComponents/otherPost";

function Newpage() {
  return (
    // <div className="w-full h-full flex md:flex-row flex-col md:pt-0 pt-10 justify-center items-center text-white gap-5">
    //   <div className="md:w-3/6 w-full p-[4%] flex flex-col gap-3">
    //     <p className="text-4xl font-semibold">PAGE UNDER MAINTENANCE</p>
    //     <p className="text-xl">
    //       Hang on there! the page is currently under maintenance, we are going
    //       to back shortly!
    //     </p>
    //   </div>
    //   <div className="md:w-3/6 w-full p-[4%]">
    //     <Image
    //       src={
    //         "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGZrbXkyOG8zMm93MGpxYWUzbGlzZ2ZtcTI0bzExbHprbzQzNTVpYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
    //       }
    //       height={200}
    //       width={200}
    //       alt={`A cute animal!`}
    //       unoptimized={true}
    //       className="rounded-md w-full h-full object-cover"
    //     />

    //     <p>
    //       <a
    //         className="text-xs text-blue-800"
    //         href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC"
    //       >
    //         via GIPHY
    //       </a>
    //     </p>
    //   </div>
    // </div>
    <>
    <div className="w-full bg-primary">
<LandingPort title={'INFORMATION AND NEWS'}/>
<OtherPost/>
    </div>
    </>
  );
}

export default Newpage;
