import { Code } from "bright";
import theme from "../../../components/pages/snippets/codeblock/theme.json";

Code.theme = theme;

async function CodeBlock(props: {
  value: {
    language: string;
    code: string;
  };
}) {
  const { value } = props;

  return (
    /* @ts-expect-error Server Component */
    <Code lang={value.language} className="bg-transparent" lineNumbers>
      {value.code}
    </Code>
  );
}
export default CodeBlock;
