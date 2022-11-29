// TODO check type
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

function KatexBlock(props: any) {
  const { value, isInline } = props;
  if (isInline) {
    return <InlineMath>{value.body}</InlineMath>;
  }
  return <BlockMath>{value.body}</BlockMath>;
}
export default KatexBlock;
