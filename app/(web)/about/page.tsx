export const revalidate = 60;
import { GithubFeed } from "@/components/pages/home/github";
import { BurmaSocial } from "@/components/pages/home/burma-social";
import Hero from "@/components/pages/hero";
import Image from "next/image";
import { Chart } from "@/components/common/wakatime/Chart";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import type { Metadata } from "next";

const hero = {
  title: "About",
  subtitle: "Arkar Kaung Myat",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};

export const metadata : Metadata = {
  title:  "About",
  openGraph: getOpenGraph("/images/arkar.png", "About | " + metaData.title, metaData.description, new URL("/about", metaData.url)),
  twitter:getTwitterCard("/images/arkar.png", "About | " + metaData.title, metaData.description),
}

function AboutPage() {
  return (
    <div className="w-full lg:w-[60%]" >
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />

      <div className="flex flex-col gap-6 mb-4 ">
        <p className="leading-[2.5] text-gray-200 text-lg">
          <Image
            src="/images/profile.jpg"
            alt="My profile"
            className="object-cover float-none md:float-left  w-[200px] rounded-full aspect-square m-8"
            width={800}
            height={600}
          />
          I am a web developer with a passion for building robots. I have 4
          years of experience in web development. I have been working on web
          development projects for the past few years.
          <br /> My true passion lies in creating robots and automating tasks. I
          am currently balancing my love for web development and robotics by
          incorporating my robotics knowledge into my web development projects.
          <br />I am always eager to learn new technologies and stay up-to-date
          with industry trends to provide the best solutions for my clients and
          build innovative robots.
        </p>
        <p>
          I now work at
          <a
            href="https://otterdev.io"
            rel="noreferrer"
            target={"_blank"}
            className="pl-4 cursor-pointer text-theme-primary"
          >
            Otterdev.io
          </a>
        </p>
      </div>
      <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        <GithubFeed />
        <BurmaSocial />
      </div>
      <Chart/>
    </div>
  );
}
export default AboutPage;
