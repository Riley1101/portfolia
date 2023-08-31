import React from "react";
interface Row {
  _key: string;
  _type: "tableRow";
  cells: string[];
}

type Props = {
  isInline?: boolean;
  index?: number;
  value: {
    rows: Row[];
    _key: string;
    _type: "table";
  };
};

export function TableBlock({ value }: Props) {
  let { rows } = value;
  let head = rows[0];
  let body = rows.slice(1);
  return (
    <div className="overflow-x-auto max-w-[700px]">
      <table className="table-auto text-left my-6 max-w-max transition-all duration-300 overflow-x-scroll rounded-md p-4 border-spacing-2 bg-theme-accent-opaque ">
        <thead>
          <tr>
            {head?.cells.map((cell) => (
              <th
                key={cell}
                className="p-4 font-bold cursor-pointer hover:text-theme-accent min-w-[200px]"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="  bg-[#f056c705] bg-gradient-to-r border-theme-accent-opaque">
          {body?.map((row) => (
            <tr key={row._key}>
              {row.cells.map((cell) => (
                <td
                  key={cell}
                  className="p-4 font-bold cursor-pointer hover:text-theme-accent min-w-[200px]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
