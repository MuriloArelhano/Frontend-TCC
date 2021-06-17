import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
// icons
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight, HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
// styles
import { TableContainer, PaginationContainer } from './styles';

const Table = ({ data, columns, actions, statusColor, type }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, useSortBy, usePagination)

  return (
    <>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {column.render('Header')}
                    <span style={{ paddingTop: 2 }}>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <FaChevronDown size={14} />
                          : <FaChevronUp size={14} />
                        : ''}
                    </span>
                  </div>
                </th>
              ))}
              <th>{type === 'user' ? 'Ação' : 'Baixar respostas'}</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
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

      <PaginationContainer>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} title="Ir para a primeira página">
          <HiChevronDoubleLeft />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} title="Ir para a página anterior">
          <HiChevronLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} title="Ir para a página seguinte">
          <HiChevronRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} title="Ir para a última página">
          <HiChevronDoubleRight />
        </button>
        <span style={{ margin: '0 16px' }}>
          Página <strong>{pageIndex + 1}</strong> de {pageOptions.length}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15, 20, 25, 50].map((pageSize, index) => (
            <option key={pageSize} selected={index === 0} value={pageSize}>
              Mostrar {pageSize} {type === 'user' ? 'usuários' : 'respostas'}
            </option>
          ))}
        </select>
      </PaginationContainer>
    </>
  )
}

export default Table;