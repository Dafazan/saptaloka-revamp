"use client";
import React, { useEffect, useState } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., API calls, data fetching)
    const timer = setTimeout(() => setIsLoading(false), 5000); // Adjust time as needed

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="bg-[#fafafa] w-full h-full fixed top-0 z-50 flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/intr-ezgif.com-video-to-gif-converter.gif?alt=media&token=add2ef0f-ca0a-4a7c-bd98-6d6706e69c27"
              alt=""
            />
          </div>
          ;
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loading;
