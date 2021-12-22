import * as React from 'react';

import TablePagination from '@mui/material/TablePagination';
import { SimpleTablePaginationActions } from './SimpleTablePaginationActions';
import { UsePaginationProps } from 'hooks/usePagination';

interface SimpleTablePaginationProps extends UsePaginationProps {
  numRows: number;
}

export const SimpleTablePagination: React.FC<SimpleTablePaginationProps> = ({
  numRows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  console.log({
    numRows,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  });

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
      colSpan={3}
      count={numRows}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: {
          'aria-label': 'rows per page',
        },
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={SimpleTablePaginationActions}
    />
  );
};
