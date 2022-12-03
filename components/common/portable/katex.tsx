// TODO check type
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

function KatexBlock(props: any) {
  const { value } = props;

  return <BlockMath>{value.body}</BlockMath>;
}
export default KatexBlock;
