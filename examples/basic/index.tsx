import React from "react";
import SimpleTable, { SimpleTableOptions } from "../../src";
import { EMPLOYEES, EMPLOYEES_COLUMNS } from "../constants/employees";

const options: SimpleTableOptions = {
  filter: false,
  print: false,
  download: false,
  search: false,
  sort: false,
  selectableRows: "single",
  rowHover: false,
  selectableRowsOnClick: false,
};

export const Basic: React.FC = () => (
  <SimpleTable
    title="ACME Employee list"
    data={EMPLOYEES}
    columns={EMPLOYEES_COLUMNS}
    options={options}
  />
);
