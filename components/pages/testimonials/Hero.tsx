import React from "react";

type Props = {};

export function ExperienceHero({}: Props) {
  return (
    <div className="flex flex-col min-h-[80vh] flex flex-col justify-center ">
      <span className="text-theme-accent text-sm mb-4">Hi, I am </span>
      <h1 className="text-theme-primary font-theme text-3xl my-2 md:text-7xl font-bold md:my-3">
        Arkar Dev.{" "}
      </h1>
      <h2 className="text-gray-400 md:text-gray-500 font-theme text-4xl md:text-7xl font-bold ">
        I love building things.
      </h2>
      <p className="text-base leading-loose mt-6 text-theme-body lg:w-[70%]">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button
        className="px-6 glass-box py-4 mt-10 relative transition-all duration-500 rounded-md cursor-pointer
        bg-gradient-to-r max-w-max to-theme-accent-opaque from-theme-primary-opaque"
      >
        Checkout my resume !
      </button>
    </div>
  );
}
