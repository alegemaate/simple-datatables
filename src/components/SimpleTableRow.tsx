import * as React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { RowId } from "../types/RowId";
import { SimpleTableColumn } from "types/Column";

interface SimpleTableRowProps<TData extends RowId> {
  onClick: (id: number) => void;
  selected: boolean;
  labelId: string;
  row: TData;
  columns: SimpleTableColumn<TData>[];
}

export const SimpleTableRow = <TData extends RowId>({
  onClick,
  selected,
  labelId,
  row,
  columns,
}: React.PropsWithChildren<SimpleTableRowProps<TData>>) => (
  <TableRow
    hover
    onClick={() => onClick(row.__simple_id)}
    role="checkbox"
    aria-checked={selected}
    tabIndex={-1}
    key={row.__simple_id}
    selected={selected}
  >
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        checked={selected}
        inputProps={{
          "aria-labelledby": labelId,
        }}
      />
    </TableCell>
    {columns.map((column) => (
      <TableCell key={column.name}>{row[column.name]}</TableCell>
    ))}
  </TableRow>
);
