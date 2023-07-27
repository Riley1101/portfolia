import { ProjectCard } from "../project-card";

export function Intro() {
  const data = [1, 2, 3];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-lg font-bold text-white">
        Hello, I am Arkar Kaung Myat 👋
      </h1>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>
    </div>
  );
}
