import { BlockMath } from "react-katex";

function KatexBlock(props: {
    value: {
        body: string
    }

}) {
    const { value } = props;

    return (
        <div className="block my-6 py-2 leading-loose transition-all duration-300 border border-transparent rounded-md bg-theme-accent-opaque bg-gradient-to-r">
            <BlockMath>{value.body}</BlockMath>
        </div>
    );
}
export default KatexBlock;
