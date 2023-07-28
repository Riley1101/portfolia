import { ProjectCard } from "../project-card";

export function Intro() {
  const data = [1, 2, 3];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-2xl font-bold text-white">
        Hello, I&apos;m Arkar Dev 👋
      </h1>
      <p className="text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi lorem pariatur mollit ex esse enim labore
        culpa sint ad nisi lorem pariatur mollit ex esse enim labore culpa sint
        ad nisi lorem pariatur mollit ex esse exercitation amet.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi lorem pariatur mollit ex esse enim labore
        culpa sint ad nisi lorem pariatur mollit ex esse enim labore culpa sint
        ad nisi lorem pariatur mollit ex esse exercitation amet.
      </p>

      <p className="text-gray-300 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {data.map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </div>
  );
}
