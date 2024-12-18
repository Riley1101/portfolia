type Props = {
  title: string;
  subtitle: string;
  description: string;
};
function Hero(props: Props) {
  return (
    <div className="pb-4">
      <p className="w-full mb-6 ml-auto text-base text-right text-theme-primary">
        {props.title}
      </p>
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl">{props.subtitle}</h1>
      <p className="leading-loose text-lg text-theme-body">
        {props.description}
      </p>
    </div>
  );
}

export default Hero;
