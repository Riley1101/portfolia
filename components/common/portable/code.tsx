function CodeBlock(props: {
  value: {
    language: string;
    code: string;
  };
}) {
  const { value } = props;
  return (
    <div className="w-full my-6 transition-all duration-300 border border-transparent rounded-md bg-[#f056c705] bg-gradient-to-r ">
    {value.code}
    </div>
  );
}
export default CodeBlock;
