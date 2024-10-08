export function Intro() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-2xl font-bold text-white">
        Hello, I&apos;m <span className="text-theme-primary">Arkar Myat</span> 👋
      </h1>
      <p className="text-gray-300 leading-relaxed ">
        An inspiring software engineer{" "}
        <a
          href="https://fortune.com"
          target="_blank"
          className="text-theme-accent"
        >
          @Fortune
        </a>
        , Coding with a strong passion for design and computer science, I enjoy
        creating amazing things and building blazingly-fast websites.
      </p>
    </div>
  );
}
