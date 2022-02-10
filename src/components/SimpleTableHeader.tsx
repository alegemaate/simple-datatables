import * as React from "react";

import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Checkbox from "@mui/material/Checkbox";

import { Order } from "../utils/sort";
import { SimpleTableColumn } from "types/Column";
import { DataKeys } from "types/DataKeys";
import { RowId } from "types/RowId";

interface SimpleTableHeaderProps<TData> {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: DataKeys<TData>) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy?: DataKeys<RowId & TData> | null;
  rowCount: number;
  columns: SimpleTableColumn<TData>[];
}

export function SimpleTableHeader<TData>({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  columns,
}: React.PropsWithChildren<SimpleTableHeaderProps<TData>>) {
  const createSortHandler = (property: DataKeys<TData>) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.name}
            align={column.numeric ? "right" : "left"}
            padding={column.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === column.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.name}
              direction={orderBy === column.name ? order : "asc"}
              onClick={createSortHandler(column.name)}
            >
              {column.label ?? column.name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
