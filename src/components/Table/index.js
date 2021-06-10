import React from 'react'

const Table = ({
  headers = [],
  items = [],
  renderItem = null,
  itemKey = null
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map(({ text, value }) => (
            <th key={value}>{text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={itemKey ? index : item[itemKey]}>
            {headers.map(({ value }) => (
              <td key={value}>{renderItem ? renderItem({ header: value, item }) : item[value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
