import React from "react";

export default function LoadingGallaryImage() {
  return (
    <div className="animate-pulse flex  gap-4  p-4 w-full ">
      <div className="flex justify-center ">
        <div className="h-[15rem] sm:h-[25rem] sm:w-[25rem] w-[15rem] rounded-lg bg-gray-200"></div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="h-15 w-20 sm:h-20 sm:w-20 bg-gray-200 rounded-lg"></div>     
        <div className="h-15 w-20 sm:h-20 sm:w-20 bg-gray-200 rounded-lg"></div>     
        <div className="h-15 w-20 sm:h-20 sm:w-20 bg-gray-200 rounded-lg"></div>       
      </div>
    </div>
  );
}
