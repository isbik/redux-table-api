import React from "react";

const Table = ({
  headers = [],
  items = [],
  renderItem = null,
  itemKey = null,
}) => {
  return (
    <div className="w-full">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            {headers.map(({ text, value }) => (
              <th
                className="p-2 border bg-green-200 border-green-400"
                key={value}
              >
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={itemKey ? index : item[itemKey]}>
              {headers.map(({ value }) => (
                <td
                  className="p-2 border bg-green-200 border-green-400"
                  key={value}
                >
                  {renderItem
                    ? renderItem({ header: value, item })
                    : item[value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 flex justify-end">
        <button className="mr-2 bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4">
          &#8592;
        </button>
        <button className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Table;
