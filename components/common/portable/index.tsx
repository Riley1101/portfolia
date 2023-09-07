import { PortableText } from "@portabletext/react";
import components from "./components";

type Props = {
  value: any;
};

export default async function PortableBody({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
