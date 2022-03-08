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

interface SimpleTableProps<TData> {
  title?: string | null;
  data: TData[];
  columns: SimpleTableColumn<TData>[];
  options?: {
    dense?: boolean;
    rowsPerPage?: number;
    displayEmptyRows?: boolean;
  };
}

function SimpleTable<TData>({
  title,
  options,
  data,
  columns,
}: React.PropsWithChildren<SimpleTableProps<TData>>) {
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    usePagination(options?.rowsPerPage ?? 5);

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
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
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
            />
            <TableBody>
              {sortedData.map((row, index) => {
                const isItemSelected = isSelected(row.__simple_id);
                const labelId = `clean-table-checkbox-${index}`;

                return (
                  <SimpleTableRow
                    key={row.__simple_id}
                    row={row}
                    selected={isItemSelected}
                    labelId={labelId}
                    onClick={handleClick}
                    columns={columns}
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
        />
      </Paper>
    </Box>
  );
}

export default SimpleTable;
