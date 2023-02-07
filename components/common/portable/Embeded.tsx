import React from "react";

type Props = {
  value: {
    url: string;
  };
};

const Embed = (props: Props) => {
  return (
    <iframe
      src={props.value.url}
      className="w-full rounded-md aspect-video"
      frameBorder="0"
    ></iframe>
  );
};
export { Embed };
