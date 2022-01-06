import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const paginationButton = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    // pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table id="customers" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="buttons">
        <span>
          Page {""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="button-37"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="button-37"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="button-37"
        >
          {[10, 20, 30].map((pageSize) => (
            <option value={pageSize} key={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <div className="pagination">
        {paginationButton.map((pagniation, idx) => {
          return (
            <button
              key={pagniation}
              onClick={() => gotoPage(idx)}
              className="button-37"
            >
              {pagniation}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default PaginationTable;
