import React from "react";

export function Loader() {
  return (
    <div className=" md:mt-8 w-full h-full min-h-[80vh] grid grid-rows-[150px_auto]  gap-4">
      <div className="rounded-md grid grid-rows-[30px_30px_auto]  opacity-20 gap-4 animate-pulse">
        <div className="bg-theme-accent-opaque rounded-lg" />
        <div className="bg-theme-accent-opaque rounded-lg w-[70%] " />
        <div className="grid grid-rows-[25px_25px] gap-3">
          <div className="flex items-center justify-between ">
            <div className="bg-theme-accent-opaque min-w-[90px] h-full rounded-lg" />
            <div className="bg-theme-accent-opaque min-w-[150px] h-full rounded-lg" />
          </div>
          <div className="bg-theme-accent-opaque min-w-[150px] h-full rounded-lg" />
        </div>
      </div>
      <div className="rounded-md grid grid-rows-4 gap-6  mt-8">
        <div className="bg-theme-accent-opaque opacity-20 animate-pulse rounded-lg" />
        <div className="bg-theme-accent-opaque opacity-20 animate-pulse rounded-lg" />
        <div className="bg-theme-accent-opaque opacity-20 min-h-[120px] animate-pulse rounded-lg" />
        <div className="bg-theme-accent-opaque opacity-20 animate-pulse rounded-lg" />
      </div>
    </div>
  );
}
