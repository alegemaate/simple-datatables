import * as React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import {
  RowsPerPageOption,
  SimpleTablePagination,
} from "./SimpleTablePagination";
import { UsePaginationProps } from "hooks/usePagination";

interface SimpleTableFooterProps extends UsePaginationProps {
  numRows: number;
  rowsPerPageOptions?: RowsPerPageOption[];
}

export const SimpleTableFooter: React.FC<SimpleTableFooterProps> = ({
  numRows,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
  rowsPerPageOptions,
}) => (
  <TableFooter>
    <TableRow>
      <SimpleTablePagination
        numRows={numRows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </TableRow>
  </TableFooter>
);
