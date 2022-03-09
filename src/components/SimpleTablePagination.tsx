import * as React from "react";

import TablePagination from "@mui/material/TablePagination";
import { SimpleTablePaginationActions } from "./SimpleTablePaginationActions";
import { UsePaginationProps } from "hooks/usePagination";

export type RowsPerPageOption =
  | number
  | {
      label: string;
      value: number;
    };

interface SimpleTablePaginationProps extends UsePaginationProps {
  numRows: number;
  rowsPerPageOptions?: RowsPerPageOption[];
}

export const SimpleTablePagination: React.FC<SimpleTablePaginationProps> = ({
  numRows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPageOptions,
}) => {
  const options = React.useMemo(() => {
    if (rowsPerPageOptions) {
      return rowsPerPageOptions;
    }
    return [5, 10, 25, { label: "All", value: -1 }];
  }, [rowsPerPageOptions]);

  return (
    <TablePagination
      rowsPerPageOptions={options}
      colSpan={3}
      count={numRows}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: {
          "aria-label": "rows per page",
        },
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={SimpleTablePaginationActions}
    />
  );
};
