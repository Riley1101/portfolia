import React from "react";

type Props = {};

export function Loader({}: Props) {
  return (
    <div className=" w-full min-h-[70vh] grid md:justify-center md:items-center absolute top-[50%] md:top-[0%] left-0 col-start-1 ">
      <div className="aspect-square pulse ">
        <div className="min-h-[15rem] flex flex-col  shadow-sm rounded-xl">
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <div
                className="animate-spin inline-block w-12 h-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
