
function CodeBlock(props: {
  value: {
    language: string;
    code: string;
  };
}) {
  const { value } = props;

  return (
    <div className="block grid my-6 transition-all duration-300 border border-transparent rounded-md bg-[#f056c705] bg-gradient-to-r ">
      <pre className={`command-line bg-transparent language-${value.language}`}>
        <code className={`text-sm line-number language-${value.language}`}>
          {value.code}
        </code>
      </pre>
    </div>
  );
}
export default CodeBlock;
