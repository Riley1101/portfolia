type Props = {
  title: string;
  description: string;
  categories: string[];
  mainImage: string;
};

function Hero(props: Props) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-white lg:text-5xl">
        {props.title}
      </h1>
      <div className="flex items-center justify-between">
        <span className="block my-4 text-theme-accent">
          Jan 8, 2022 <span>▲</span> 5 min read
        </span>
        <span className="block text-sm font-bold text-theme-primary">
          Arkar Kaung Myat
        </span>
      </div>
      <div className="flex gap-4 my-4">
        {props.categories &&
          props.categories.map((itm) => (
            <span
              key={itm}
              className="block px-2 py-1 text-sm rounded-lg cursor-pointer bg-theme-primary-opaque"
            >
              {itm}
            </span>
          ))}
      </div>
      <p className="leading-loose text-md text-theme-body">
        {props.description}
      </p>
    </div>
  );
}

export default Hero;
