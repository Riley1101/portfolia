import { Code } from "bright";
import theme from "./theme.json";

type Props = {
  value: {
    code: string;
    language: string;
  };
};
Code.theme = theme;

export default async function CodeBlock({ value }: Props) {
  return (
    /* @ts-expect-error Server Component */
    <Code lang={value.language} className="bg-transparent" lineNumbers>
      {value.code}
    </Code>
  );
}
