import React from "react";

const Table = ({
  headers = [],
  items = [],
  renderItem = null,
  itemKey = null,
  page = 1,
  pages = 1,
  loading,
  error,
  setPage = () => {},
}) => {
  if (error)
    return (
      <div className="p-4 bg-red-200">
        Sorry, data cannot be uploaded, try later
      </div>
    );
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
          {loading ? (
            <tr className="bg-green-200">
              <td colspan="100%">Loading data ...</td>
            </tr>
          ) : (
            items.map((item, index) => (
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
            ))
          )}
        </tbody>
      </table>

      <div className="mt-2 flex justify-end">
        <button
          disabled={loading || page === 0}
          onClick={() => setPage(page - 1)}
          className="mr-2 bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4"
        >
          &#8592;
        </button>
        <button
          disabled={loading || page >= pages}
          onClick={() => setPage(page + 1)}
          className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Table;
