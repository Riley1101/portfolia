import { ProjectCard } from "../project-card";

export function Intro() {
  const data = [1, 2, 3];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="text-2xl  font-bold text-white">
        Hello, I am Arkar Kaung Myat 👋
      </h1>
      <p className="text-white leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi lorem pariatur mollit ex esse enim labore
        culpa sint ad nisi lorem pariatur mollit ex esse enim labore culpa sint
        ad nisi lorem pariatur mollit ex esse exercitation amet.
      </p>

      <div className="my-4">
        <h2 className="text-xl font-semibold  mb-2 text-theme-accent">
          Projects
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <ProjectCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
