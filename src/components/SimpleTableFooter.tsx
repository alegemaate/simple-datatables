import * as React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { SimpleTablePagination } from "./SimpleTablePagination";
import { UsePaginationProps } from "hooks/usePagination";

interface SimpleTableFooterProps extends UsePaginationProps {
  numRows: number;
}

export const SimpleTableFooter: React.FC<SimpleTableFooterProps> = ({
  numRows,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}) => (
  <TableFooter>
    <TableRow>
      <SimpleTablePagination
        numRows={numRows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </TableRow>
  </TableFooter>
);
