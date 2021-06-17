import React from 'react';
import { useTable } from 'react-table';
// styles
import { TableContainer } from './styles';

const Table = ({ data, columns, actions, statusColor, type }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
            <th>{type === 'user' ? 'Ação' : 'Baixar respostas'}</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className={cell.column.id === 'status' ? statusColor(cell.value) : ''}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
              <td>
                {type === 'user' ? actions(row.values.status, row.values.email) : actions(row.values)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}

export default Table;