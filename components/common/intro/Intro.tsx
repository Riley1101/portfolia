export function Intro() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="my-8">
      <h1 className="text-lg font-bold mb-2">Hello, I am Arkar Kaung Myat.</h1>
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data.map((item) => (
          <div
            key={item}
            className="border min-h-[200px] border-gray-700"
          ></div>
        ))}
      </div>
    </div>
  );
}
