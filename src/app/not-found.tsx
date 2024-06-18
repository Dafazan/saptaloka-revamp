import React from "react";
import Image from "next/image";

function Newpage() {
  return (
    <div className="w-full h-full flex justify-center items-center text-white gap-5">
      <div className="w-3/6 p-[4%] flex flex-col gap-3">
        <p className="text-4xl font-semibold">404 | PAGE NOT FOUND</p>
        <p className="text-xl">
          Are you sure you are entering the right link? if so, the link may not
          available anymore or has moved.
        </p>
      </div>
      <div className="w-3/6 p-[4%] flex justify-end">
        <Image
          src={
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmo4OXprZDZqczRxemRmY3duM2trZmQ0dmNvdjhoZ3F5YzU0aGU0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UK7Io2fmGTJ4ly6Kf1/giphy.gif"
          }
          height={200}
          width={200}
          alt={`A cute animal!`}
          unoptimized={true}
          className="rounded-md h-full w-4/6 object-cover"
        />

        <p></p>
      </div>
    </div>
  );
}

export default Newpage;
