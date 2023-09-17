import { useEffect, useState } from "react";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/20/solid";

import cx from "classnames";

function count_line_numbers(value: string) {
  return value.split("\n").length;
}

function CodeBlock(props: {
  value: {
    language: string;
    code: string;
  };
}) {
  const { value } = props;
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    let lines = count_line_numbers(value.code);
    if (lines > 15) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [value.code]);

  let handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div
      className={cx(
        " max-h-auto grid transition-all my-6 overflow-y-hidden duration-300 border relative border-transparent rounded-md bg-[#f056c705] bg-gradient-to-r ",
        {
          "max-h-[200px] overflow-y-hidden": collapse,
        },
      )}
    >
      <pre className={`command-line bg-transparent language-${value.language}`}>
        <code className={`text-sm line-number language-${value.language}`}>
          {value.code}
        </code>
      </pre>
      <button
        onClick={handleCollapse}
        className={cx(
          "bottom-0 right-0 w-full p-2 glass-box grid place-items-center",
          { absolute: collapse },
        )}
      >
        {!collapse ? (
          <ArrowsPointingInIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
    </div>
  );
}
export default CodeBlock;
