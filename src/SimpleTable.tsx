import * as React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import { SimpleTableToolbar } from "./components/SimpleTableToolbar";
import { SimpleTableHeader } from "./components/SimpleTableHeader";
import { usePagination } from "./hooks/usePagination";
import { SimpleTableFooter } from "./components/SimpleTableFooter";
import { useColumnSort } from "./hooks/useColumnSort";
import { SimpleTableRow } from "./components/SimpleTableRow";
import { useDataId } from "./hooks/useDataId";
import { SimpleTableColumn } from "types/Column";
import { downloadCsv } from "utils/download-csv";
import { SimpleTableOptions } from "types/Options";

interface SimpleTableProps<TData> {
  title?: string | null;
  data: TData[];
  columns: SimpleTableColumn<TData>[];
  options?: SimpleTableOptions;
}

function SimpleTable<TData>({
  title,
  options,
  data,
  columns,
}: React.PropsWithChildren<SimpleTableProps<TData>>) {
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    usePagination(options?.page, options?.rowsPerPage);

  const idData = useDataId(data);

  const {
    data: sortedData,
    handleRequestSort,
    order,
    orderBy,
  } = useColumnSort({
    data: idData,
    page,
    rowsPerPage,
  });

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = sortedData.map((n) => n.__simple_id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    let newSelected: readonly number[] = [];
    const selectedIndex = selected.indexOf(id);
    const mode = options?.selectableRows ?? "multiple";

    if (mode === "none") {
      newSelected = [];
    } else if (mode === "single") {
      if (selectedIndex === -1) {
        newSelected = [id];
      } else {
        newSelected = [];
      }
    } else if (mode === "multiple") {
      if (selectedIndex === -1) {
        newSelected = [...selected, id];
      } else {
        newSelected = selected.filter((elem) => elem !== id);
      }
    }

    setSelected(newSelected);
  };

  const handleDownload = () => {
    downloadCsv(sortedData, columns);
  };

  const isSelected = (id: number) => selected.includes(id);

  const emptyRows = rowsPerPage - sortedData.length;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <SimpleTableToolbar
          numSelected={selected.length}
          title={title}
          onDownload={handleDownload}
          download={options?.download ?? true}
          filter={options?.filter ?? true}
          search={options?.search ?? true}
          print={options?.print ?? true}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={options?.dense ? "small" : "medium"}
          >
            <SimpleTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={sortedData.length}
              columns={columns}
              selectableRows={options?.selectableRows}
            />
            <TableBody>
              {sortedData.map((row, index) => {
                const isItemSelected = isSelected(row.__simple_id);
                const labelId = `simple-table-checkbox-${index}`;

                return (
                  <SimpleTableRow
                    key={row.__simple_id}
                    row={row}
                    selected={isItemSelected}
                    labelId={labelId}
                    onClick={handleClick}
                    columns={columns}
                    hover={options?.rowHover}
                    selectableRows={options?.selectableRows}
                    selectableRowsOnClick={options?.selectableRowsOnClick}
                  />
                );
              })}
              {options?.displayEmptyRows && emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (options?.dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <SimpleTableFooter
          numRows={data.length}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={options?.rowsPerPageOptions}
        />
      </Paper>
    </Box>
  );
}

export default SimpleTable;
