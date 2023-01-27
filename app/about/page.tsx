export const revalidate = 60;
import Hero from "@/components/pages/hero";
import Image from "next/image";
const hero = {
  title: "About",
  subtitle: "More about Me",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};

function AboutPage() {
  return (
    <div className="w-full md:w-[80%]">
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <Image
        src="/images/profile.jpeg"
        alt="My profile"
        className="object-cover w-full mx-auto my-4 rounded-lg aspect-video"
        width={800}
        height={600}
      />

      <div className="flex flex-col gap-6 mb-4 ">
        <p>
          I am a web developer with a passion for building robots. I have 4
          years of experience in web development. I have been working on web
          development projects for the past few years.
        </p>
        <p>
          My true passion lies in creating robots and automating tasks. I am
          currently balancing my love for web development and robotics by
          incorporating my robotics knowledge into my web development projects.
        </p>
        <p>
          I am always eager to learn new technologies and stay up-to-date with
          industry trends to provide the best solutions for my clients and build
          innovative robots.
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
    </div>
  );
}
export default AboutPage;
